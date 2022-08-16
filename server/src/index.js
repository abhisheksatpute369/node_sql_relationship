const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
require("dotenv").config();
const connectdb = require("./config/db")

const app = express()

app.use(express.json());
app.use(cors());
app.use(body_parser.urlencoded ({extended: false}));

// all routes write here 
app.use('/', require("./controller/company.controller"));
app.use('/', require("./controller/compdetail.controller"));
app.use('/', require("./controller/vehicle.controller"));
app.use('/', require("./controller/dealer.controler"));

const PORT = process.env.PORT || 3003;
app.listen(PORT, ()=>{
    connectdb.sequalize.authenticate().then(() => {
        console.log('Yep! you connected to database');
    }).catch(err => {
        console.error('Sorry! unable to connect', err);
    }
    );
    console.log(`server runing on port${PORT}`)
})