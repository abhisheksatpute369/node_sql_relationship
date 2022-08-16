const express = require('express');

const Router = express.Router();
const {Deals, Dealer} = require("../config/db");

// route for post the deals data 
Router.post('/adddeal', (req, res) => {
    Deals.create(req.body).then(Deals => {
        res.send(Deals);
    }).catch(err => {
        res.send(err);
    })

});

//route for get dealers data
Router.get('/deal', (req, res) => {
    console.log("data gete")
    Deals.findAll({
 
    }).then(deal => {
        res.send(deal);
    }
    ).catch(err => {
        res.send(err);
    }
    );
});
 
module.exports = Router;