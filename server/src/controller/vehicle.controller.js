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

// route for get vehicle by company id for getting vehicles of perticular company
Router.get('/vehicle/:id', (req, res) => {
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
});

//route for get dealers data from vehicle table
Router.get('/dealer/:id', (req, res) => {
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
});
 
module.exports = Router;