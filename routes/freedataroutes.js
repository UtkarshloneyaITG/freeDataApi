const express = require("express")
const router = express.Router()
const { getFreeData, getFreeDataById, postFreeData, deleteData } = require('../controller/freedatacontroller')
router.route("/").get(getFreeData)
router.route("/id/:id").get(getFreeDataById)
router.route("/add").post(postFreeData)
router.route("/delete/password/2406").post(deleteData)
module.exports = router