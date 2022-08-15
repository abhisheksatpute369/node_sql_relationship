const express = require('express');

const Router = express.Router();
const {Company  , Compdetails} = require("../config/db");

// route for post the company data 
Router.post('/addcompdetail', (req, res) => {
    Compdetails.create(req.body).then(Compdetails => {
        res.send(Compdetails);
    }).catch(err => {
        res.send(err);
    })

});
 
module.exports = Router;