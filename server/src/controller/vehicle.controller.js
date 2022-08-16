const express = require('express');

const Router = express.Router();
const { Vehicle, Dealer} = require("../config/db");

// route for post the vehicles data 
Router.post('/addvehicle', (req, res) => {
    Vehicle.create(req.body).then(Vehicle => {
        res.send(Vehicle);
    }).catch(err => {
        res.send(err);
    })

});

// route for get dealers data
Router.get('/vehicle', (req, res) => {
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
});
 
module.exports = Router;