var express = require('express');
var router = express.Router();
const {CarController} = require("../Controllers/CarController.js")
/* GET home page. */
router.route("/car/:username").get(CarController.find)
router.route("/cars").get(CarController.all)
router.route("/create/:userId").post(CarController.create)
module.exports = router;