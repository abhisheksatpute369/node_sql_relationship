const express = require('express');

const Router = express.Router();
const { Vehicle, Dealer} = require("../config/db");

// route for post the vehicles data 

const postvehicle = (req, res) => {
    Vehicle.create(req.body).then(Vehicle => {
        res.send(Vehicle);
    }).catch(err => {
        res.send(err);
    })
}

// route for get dealers data

const getvehicle = (req, res) =>{
    Vehicle.findAll({
        include:[{
            model:Dealer,
            // attributes:['compdetail_id' , 'ceo_name','manager','headquarter','employee_num']
     }]
    }).then(vehicle => {
        res.send(vehicle);
    }
    ).catch(err => {
        res.send(err);
    }
    );
}

// function for get vehicle with pagination 
const allvehicle = (req, res) => {
    let limit = req.query.limit || 5;
    let offset = limit * (req.query.page - 1)||0;
    Vehicle.findAndCountAll({
        limit: limit,
        offset: offset
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
}

// route for get vehicle by company id for getting vehicles of perticular company

const getvehiclebyid = (req,res) =>{
    Vehicle.findAll({
        where: {
            comp_id: req.params.id
        }
    }).then(vehicle => {
        res.send(vehicle);
    }
    ).catch(err => {
        res.send(err);
    }
    );
}


//route for get dealers data from vehicle table for that perticular vehicle
const getdealerbyvehicleid = (req, res)=>{
    Vehicle.findAll({
        where:{
            v_id : req.params.id
        },
        include:[{
            model:Dealer,
            // attributes:['compdetail_id' , 'ceo_name','manager','headquarter','employee_num']
     }]
    }).then(dealer => {
        res.send(dealer);
    }
    ).catch(err => {
        res.send(err);
    }
    );
}
 
module.exports = {postvehicle, getvehicle,allvehicle, getvehiclebyid, getdealerbyvehicleid};//all vehicle for pagination