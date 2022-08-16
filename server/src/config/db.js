// const mysql = require('mysql');
const {Sequelize, DataTypes} = require('sequelize');
const Company = require("../models/company.model");
const Compdetails = require("../models/compdetail.model");
const Vehicle = require("../models/vehicle.model")

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

// one to one 1:1 relationship 
db.Company.hasOne(db.Compdetails, {foreignKey: 'comp_id'});
db.Compdetails.belongsTo(db.Company, {foreignKey: 'comp_id'});

//one to many relationship 
db.Company.hasMany(db.Vehicle, {foreignKey: 'comp_id'});
db.Vehicle.belongsTo(db.Company, {foreignKey: 'comp_id'});

//many to many relationship
// db.

db.sequalize.sync({force:false}).then(() => {
    console.log(`synchronized to data base`);
  });
  
module.exports = db;