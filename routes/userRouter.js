var express = require('express');
var router = express.Router();
const {UserController} = require("../Controllers/UserController.js")
/* GET home page. */
router.route("/user/:username").get(UserController.find)
router.route("/users").get(UserController.all)
router.route("/create-user").post(UserController.create)
module.exports = router;
