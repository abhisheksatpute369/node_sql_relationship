// const mysql = require('mysql');
const {Sequelize, DataTypes} = require('sequelize');
const Company = require("../models/company.model");
const Compdetails = require("../models/compdetail.model");

const sequalize = new Sequelize('relations', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
}
);

const db = {};

db.sequalize = sequalize;
db.Company = Company(sequalize, DataTypes);
db.Compdetails = Compdetails(sequalize,DataTypes);

db.Company.hasOne(db.Compdetails, {foreignKey: 'comp_id'});
db.Compdetails.belongsTo(db.Company, {foreignKey: 'comp_id'});

db.sequalize.sync({force:false}).then(() => {
    console.log(`synchronized to data base`);
  });
  
module.exports = db;