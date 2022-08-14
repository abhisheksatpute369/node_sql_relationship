const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");

require("dotenv").config();

const app = express()

app.use(express.json());
app.use(cors());
app.use(body_parser.urlencoded ({extended: false}));

const PORT = process.env.PORT || 3003;

app.listen(PORT,()=>{
    console.log(`server runing on port${PORT}`)
})