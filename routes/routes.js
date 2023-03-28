const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
// const jobsController = require("../controllers/jobsController");
// const chatController = require("../controllers/chatsController");

// Auth routes
router.post('/users/auth', usersController.authenticate);
router.post("/users/signup", usersController.registerUser);
router.post("/users/login", usersController.login);
router.post("/users/logout", usersController.logout);

// User routes - user view
// router.delete("/users/:id", usersController.deleteUser);
// router.post("/users/new", usersController.registerUser);

// User routes - admin view
// router.get("/users", usersController.getAllUsers);

// Chat routes
// router.get("/chats", chatController.getAllChats);
// router.get("/chats/:id", chatController.getMessages);
// router.post("/chats/:id", chatController.addMessage);

module.exports = router;
