const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const ordersController = require("../controllers/ordersController");
// const chatController = require("../controllers/chatsController");

// Auth routes
router.post('/api/auth', usersController.authenticate);
router.post("/api/auth/register", usersController.registerUser);
router.post("/api/auth/login", usersController.login);
router.post("/api/auth/logout", usersController.logout);
router.get("/api/auth", usersController.getUser);

// Order Routes
router.post('/api/order/create', ordersController.createOrder);
router.get('/api/order', ordersController.getAllOrders);
router.get('/api/order/:id', ordersController.getOrder);

// Email Routes (Test)
router.get('/api/email', ordersController.sendEmail);

// User routes - user view
// router.delete("/users/:id", usersController.deleteUser);
// router.post("/users/new", usersController.registerUser);

// User routes - admin view
// router.get("/users", usersController.getAllUsers);

/* ------------------------------------------------------------------------------------------ */

// Job routes
// router.get("/jobs", jobsController.getAllJobs);             // * All *
// router.get("/jobs/detail/:id", jobsController.getJobById);      // Admin    Employer    Freelancer
// router.get("/jobs/prev", jobsController.getAllPreviousJobs);    //          Employer    Freelancer
// router.post("/jobs/create", jobsController.createJob);          //          Employer
// router.put("/jobs/:id", jobsController.updateJob);              //          Employer
// router.post("/jobs/:id", jobsController.acceptJob);             //                      Freelancer
// router.delete("/jobs/:id", jobsController.deleteJob);           // Admin    Employer
// router.post("/jobs/publish/:id", jobsController.publishJob);    // Admin

/* ------------------------------------------------------------------------------------------ */

// Chat routes
// router.get("/chats", chatController.getAllChats);
// router.get("/chats/:id", chatController.getMessages);
// router.post("/chats/:id", chatController.addMessage);

module.exports = router;
