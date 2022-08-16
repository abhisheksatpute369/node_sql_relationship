const express = require('express');

const Router = express.Router();
const {Company  , Vehicle} = require("../config/db");

// route for post the vehicles data 
Router.post('/addvehicle', (req, res) => {
    Vehicle.create(req.body).then(Vehicle => {
        res.send(Vehicle);
    }).catch(err => {
        res.send(err);
    })

});
 
module.exports = Router;