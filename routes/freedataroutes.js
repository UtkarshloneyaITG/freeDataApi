const express = require("express")
const router = express.Router()
const { getFreeData, getFreeDataById } = require('../controller/freedatacontroller')
router.route("/").get(getFreeData)
router.route("/id/:id").get(getFreeDataById)

module.exports = router