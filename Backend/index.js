const express = require('express');
const routes = require('./Routes/routes');
const mongoogse = require('../Backend/DataBase/mongoose')

const app = express();

app.use(express.json());

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","GET,POST,HEAD,OPTIONS,PUT,PATCH,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("server running..")
});