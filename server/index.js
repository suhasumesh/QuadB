const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const route = require('./Routes/route');
const cors = require('cors');
require('dotenv').config();


const app = express(); 

app.use(cors());

app.use('/api',route);

mongoose.connect(process.env.MONGO_URL).then(result=>{
    console.log("Connected to database");
    app.listen(5000,()=>{
        console.log("Server listening in port 5000");
    })

})

