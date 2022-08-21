
const {Dealer, Vehicle} = require("../config/db");

// route for post the dealers data 
const postdealer = (req, res) => {
    Dealer.create(req.body).then(Dealer => {
        res.send(Dealer);
    }).catch(err => {
        res.send(err);
    })
}

//route for get dealers data
const getdealer = (req, res) => {
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
}

//route for get dealers data
const getdealerbyid = (req, res) =>{
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
}


 
module.exports = {postdealer, getdealer, getdealerbyid};