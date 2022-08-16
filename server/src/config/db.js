// const mysql = require('mysql');
const {Sequelize, DataTypes} = require('sequelize');
const Company = require("../models/company.model");
const Compdetails = require("../models/compdetail.model");
const Vehicle = require("../models/vehicle.model")
const Dealer = require("../models/dealer.model");
const Deals  =require("../models/deals.model");

const sequalize = new Sequelize('relations', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
}
);

const db = {};

// putting models into db object 
db.sequalize = sequalize;
db.Company = Company(sequalize, DataTypes);
db.Compdetails = Compdetails(sequalize,DataTypes);
db.Vehicle = Vehicle(sequalize, DataTypes);
db.Dealer = Dealer(sequalize, DataTypes);
db.Deals = Deals(sequalize, DataTypes);


// one to one 1:1 relationship 
db.Company.hasOne(db.Compdetails, {foreignKey: 'comp_id'});
db.Compdetails.belongsTo(db.Company, {foreignKey: 'comp_id'});

//one to many relationship 
db.Company.hasMany(db.Vehicle, {foreignKey: 'comp_id'});
db.Vehicle.belongsTo(db.Company, {foreignKey: 'comp_id'});

//many to many relationship
db.Dealer.belongsToMany(db.Vehicle, {through:db.Deals});
db.Vehicle.belongsToMany(db.Dealer,{through:db.Deals});

db.sequalize.sync({force:false}).then(() => {
    console.log(`synchronized to data base`);
  });
  
module.exports = db;