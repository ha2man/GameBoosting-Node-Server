const express = require("express");
const router = express.Router();
const usersController = require("../controllers/user-controller");
const chatController = require("../controllers/chat-controller");

// Auth routes
router.post("/register", usersController.registerUser);
router.post("/login", usersController.login);
router.get("/auth", usersController.authenticate);
router.get("/logout", usersController.logout);

// User routes
router.get("/users", usersController.getAllUsers);
router.delete("/users/:id", usersController.deleteUser);
router.post("/users/new", usersController.registerUser);

// Chat routes
router.get("/chats", chatController.getAllChats);
router.get("/chats/:id", chatController.getMessages);
router.post("/chats/:id", chatController.addMessage);

module.exports = router;
