const mongoose = require('mongoose');

const MerchantSchema = new mongoose.Schema({

    _MerchantId:{
        type:mongoose.Schema.Types.ObjectId,
    },
    RestaurantName:{
        type:String
    },
    OwnerName:{
        type:String
    },
    MobileNumber :{
        type:Number,
        minlength:10
    },
    Address:{
        type:String
    },
    Price:{
        type:Array,
        Rate:{
            rateType:String,
            price:String
        }
    },
    TodaysMenu:{
        type:String
    }
});

const Merchant = mongoose.model('Merchant',MerchantSchema);

module.exports = Merchant;
