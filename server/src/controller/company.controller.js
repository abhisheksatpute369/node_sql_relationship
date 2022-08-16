const express = require('express');

const Router = express.Router();
const {Company  , Compdetails} = require("../config/db");


//route for get company data
Router.get('/', (req, res) => {
    Company.findAll({
    //     include:[{
    //         model:Compdetails,
    //         attributes:['compdetail_id' , 'ceo_name','manager','headquarter','employee_num']
    //  }]
    }).then(Companys => {
        res.send(Companys);
    }
    ).catch(err => {
        res.send(err);
    }
    );
});

//route for get perticular company data
Router.get('/:id', (req, res) => {
    // var id = req.params.comp_id
    Company.findAll({
        where:{
            comp_id:req.params.id
        },
        include:[{
            model:Compdetails,
            attributes:['compdetail_id' , 'ceo_name','manager','headquarter','employee_num']
     }]
    }).then(Companys => {
        res.send(Companys);
    }
    ).catch(err => {
        res.send(err);
    }
    );
});

// route for post the company data 
Router.post('/addcompany', (req, res) => {
    Company.create(req.body).then(Company => {
        res.send(Company);
    }).catch(err => {
        res.send(err);
    })

});
 
module.exports = Router;