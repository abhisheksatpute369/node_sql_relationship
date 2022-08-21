
const {Deals, Dealer} = require("../config/db");

// route for post the deals data 

const postdeal = (req, res) =>{
    Deals.create(req.body).then(Deals => {
        res.send(Deals);
    }).catch(err => {
        res.send(err);
    })
}

//route for get dealers data
const getdeal = (req,res) =>{
    Deals.findAll({
 
    }).then(deal => {
        res.send(deal);
    }
    ).catch(err => {
        res.send(err);
    }
    );
}
 
module.exports = {postdeal,getdeal};