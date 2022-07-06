
var express = require("express");
var router = express.Router();
const UserController = require("../../controllers/userController");

router.get("/user/:id", UserController.getUser);

router.get("/users", UserController.getAllUsers);

router.delete("/deleteAllUser", UserController.deleteAllUser);

router.delete("/deleteUserById/:id", UserController.deleteUserById);

router.post("/updateUserById/:id", UserController.updateUserById);


module.exports = router;

