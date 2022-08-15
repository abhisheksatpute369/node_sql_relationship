const express = require('express');

const Router = express.Router();
const {Company  , Compdetails} = require("../config/db");

// route for post the company data 
Router.post('/addcompany', (req, res) => {
    Company.create(req.body).then(Company => {
        res.send(Company);
    }).catch(err => {
        res.send(err);
    })

});
 
module.exports = Router;