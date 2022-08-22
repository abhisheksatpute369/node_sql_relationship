const companyController = require("../controller/company.controller");
const express = require("express")
const router = express.Router()

    router.post("/addcompany", companyController.postcompany)

    router.get("/company", companyController.getallcompany )

    router.get("/company/:id", companyController.getcompanybyid)

   router.get("/companyp" , companyController.comapnypaginate) //these route for pagination

    router.get('/companybyname', companyController.getsearchedcompany);// route for get comany by name


module.exports = router