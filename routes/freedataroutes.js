const express = require("express")
const router = express.Router()
const { getFreeData, getFreeDataById, postFreeData } = require('../controller/freedatacontroller')
router.route("/").get(getFreeData)
router.route("/id/:id").get(getFreeDataById)
router.route("/add").post(postFreeData)
module.exports = router