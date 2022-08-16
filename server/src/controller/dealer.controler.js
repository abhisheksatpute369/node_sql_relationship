const express = require('express');

const Router = express.Router();
const {Dealer} = require("../config/db");

// route for post the vehicles data 
Router.post('/adddealer', (req, res) => {
    Dealer.create(req.body).then(Dealer => {
        res.send(Dealer);
    }).catch(err => {
        res.send(err);
    })

});
 
module.exports = Router;