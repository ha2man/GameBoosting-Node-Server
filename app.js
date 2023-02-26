const http = require("http");
const express = require("express");
const mongooseConnect = require('./helpers/dbConnect');
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const router = require("./routes/routes")
const socket = require("socket.io");
const app = express();
const server = http.createServer(app);

const whitelist = ['http://localhost:5000', 'http://localhost:3001'];
const corsOptions = {
  credentials: true,
  exposedHeaders: ["set-cookie"],
  origin: (origin, callback) => {
    if(whitelist.includes(origin))
      return callback(null, true)
      callback(new Error('Not allowed by CORS'));
  }
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use("/", router);

dotenv.config();

mongooseConnect.dbconnect()
                .on('error', (err) => console.log("connection to db failed"))


server.listen(process.env.PORT, () => console.log(`Server started on ${process.env.PORT}`)
);

const io = socket(server, {
  cors: {
    origin: "http://localhost:3001",
    credentials: true,
  },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("addUser", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("sendMsg", (data) => {
    const sendUserSocket = onlineUsers.get(data.receiver);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msgReceive", data);
    }
  });
});
