const vehicleController = require("../controller/vehicle.controller");
const express = require("express")
const router = express.Router()

    router.post("/addvehicle", vehicleController.postvehicle)

    router.get("/vehicle", vehicleController.getvehicle )

    router.get("/allvehicle", vehicleController.allvehicle)

    router.get("/vehicle/:id", vehicleController.getvehiclebyid)

    router.get("/dealer/:id", vehicleController.getdealerbyvehicleid)


module.exports = router