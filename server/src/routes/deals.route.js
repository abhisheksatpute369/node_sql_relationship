const dealsController = require("../controller/deals.controller");
const express = require("express")
const router = express.Router()

    router.post("/adddeal", dealsController.postdeal)

    router.get("/deal", dealsController.getdeal )


module.exports = router