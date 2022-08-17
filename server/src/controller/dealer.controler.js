const express = require('express');

const Router = express.Router();
const {Dealer, Vehicle} = require("../config/db");

// route for post the dealers data 
Router.post('/adddealer', (req, res) => {
    Dealer.create(req.body).then(Dealer => {
        res.send(Dealer);
    }).catch(err => {
        res.send(err);
    })

});

//route for get dealers data
Router.get('/dealer', (req, res) => {
    Dealer.findAll({
        include:[{
            model:Vehicle,
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

//route for get dealers data
Router.get('/vehicles/:id', (req, res) => {
    Dealer.findAll({
        where:{
            d_id : req.params.id
        },
        include:[{
            model:Vehicle,
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