const express = require('express');
const routes = require('./Routes/routes');

const app = express();

app.use(express.json());

app.use(routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("server running..")
});