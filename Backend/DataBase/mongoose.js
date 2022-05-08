const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb+srv://SanketMagar:sanket@cluster0.gb50i.mongodb.net/MESS")
.then(()=>console.log("DB Connected !"))
.catch((error) => console.log(error));

module.exports = mongoose;
