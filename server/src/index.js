const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
require("dotenv").config();
const connectdb = require("./config/db")

const app = express()

app.use(express.json());
app.use(cors());
app.use(body_parser.urlencoded ({extended: false}));

// import all routes here 
const CompenyController = require("./routes/company.route");
const compDetailController = require("./routes/compdetail.route");
const dealerController = require("./routes/dealer.route");
const dealsController =require("./routes/deals.route");
const vehicleController = require("./routes/vehicle.route");

// all routes write here 
app.use("/", vehicleController);
app.use("/" , CompenyController);
app.use("/", compDetailController);
app.use("/", dealerController);
app.use("/",dealsController);


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