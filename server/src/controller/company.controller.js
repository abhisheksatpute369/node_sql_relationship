
const { Company, Compdetails } = require("../config/db");


const getcompanybyid = (req, res) => {
    Company.findByPk(+req.params.id, {
        include: [{ model: Compdetails }]
    }).then(Companys => {
        res.send(Companys);
    }
    ).catch(err => {
        res.send(err);
    }
    );
}

//route for get company data

// const getallcompany = (req, res) => {
//     Company.findAll({
//         //     include:[{
//         //         model:Compdetails,
//         //         attributes:['compdetail_id' , 'ceo_name','manager','headquarter','employee_num']
//         //  }]
//     }).then(Companys => {
//         res.send(Companys);
//     }
//     ).catch(err => {
//         res.send(err);
//     }
//     );
// }

// get all comapny data and for apply filter by company name 
const getallcompany = (req, res) => {
    const orderby = req.query.order; 
    if(orderby === undefined){  // if not get any order simply return data as database
        Company.findAll({

        }).then(Companys => {
            res.send(Companys);
        }
        ).catch(err => {
            res.send(err);
        }
        );
    }
    else{
        Company.findAll({
            order: [["comp_name", orderby]], //if getting order return data in required manner
        }).then(Companys => {
            res.send(Companys);
        }
        ).catch(err => {
            res.send(err);
        }
        );
    }
    
}

//route for get perticular company data


// route for post the company data 

const postcompany = (req, res) =>{
    Company.create(req.body).then(Company => {
        res.send(Company);
    }).catch(err => {
        res.send(err);
    })
}

const comapnypaginate = (req, res) =>{
    let limit = req.query.limit || 3;
    let offset = limit * (req.query.page - 1)||0;
    Company.findAndCountAll({
        limit: limit,
        offset: offset
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });

}

//get data by name search
const getsearchedcompany = (req, res) => {
    const name = req.query.name;
    Company.findOne({
        where : {comp_name : name}
    }).then(Companys => {
        res.send([Companys]);
    }
    ).catch(err => {
        res.send(err);
    }
    );
}

module.exports = {postcompany, getallcompany, getcompanybyid, comapnypaginate, getsearchedcompany};

