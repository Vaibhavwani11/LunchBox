const mongoose = require('mongoose');

const MerchantDetails = new mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    }
});

const MerchantUserDetails = mongoose.model('MerchantUserDetails',MerchantDetails);

module.exports = MerchantUserDetails;
