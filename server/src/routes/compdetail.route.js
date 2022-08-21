const compDetailController = require("../controller/compdetail.controller");
const express = require("express")
const router = express.Router()

    router.post("/addcompdetail", compDetailController.postcommdetails)


module.exports = router