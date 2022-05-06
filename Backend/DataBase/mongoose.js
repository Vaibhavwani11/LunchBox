const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb+srv://SanketMagar:sanket@cluster0.gb50i.mongodb.net/test").then(console.log("DB connected !")).catch(console.log("error in connecting to Db"))

module.exports = mongoose;
