const dealerController = require("../controller/dealer.controler");
const express = require("express")
const router = express.Router()

    router.post("/adddealer", dealerController.postdealer)

    router.get("/dealer", dealerController.getdealer )

    router.get("/vehicles/:id", dealerController.getdealerbyid) //get dealer by id


module.exports = router