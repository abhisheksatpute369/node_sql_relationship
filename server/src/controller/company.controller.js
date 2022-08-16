const express = require('express');

const Router = express.Router();
const { Company, Compdetails } = require("../config/db");

Router.get('/company/:id', (req, res) => {
    // var id = req.params.comp_id
    Company.findByPk(+req.params.id, {
        include: [{ model: Compdetails }]
    }).then(Companys => {
        res.send(Companys);
    }
    ).catch(err => {
        res.send(err);
    }
    );
});

//route for get company data
Router.get('/company', (req, res) => {
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


// route for post the company data 
Router.post('/addcompany', (req, res) => {
    Company.create(req.body).then(Company => {
        res.send(Company);
    }).catch(err => {
        res.send(err);
    })

});

module.exports = Router;