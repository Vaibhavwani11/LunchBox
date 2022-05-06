const express = require('express');
const Merchant = require('../DataBase/Models/Merchant')
const MerchantUser = require('../DataBase/Models/MerchantDetails')
const hashPassword = require('md5')

const router = express.Router();

router.get('/getallresturant',(req,res)=>{
    Merchant.find({},(err,data)=>{
        res.send({Resturant:data})
    });
})

router.get('/client/resturantbyaddress/:address',(req,res)=>{
    const resturantname = req.query.resturantname;
    const address = req.params.address;
    Merchant.find({RestaurantName:resturantname,Address:address},(err,data)=>{
        if(err)
            res.send("sorry not found resturant !, plz enter valid resturant name.")
        res.send(data)
    })
})

router.post('/merchant/loginmerchant',(req,res)=>{
    const username = req.body.username;
    const password = hashPassword(req.body.password);
    MerchantUser.find({username:username,password:password},(err,data)=>{
        if(err)
            res.send({status:false})
        res.send({status:true})
    })
})

router.get('/merchant/getuserbyusername/:username',(req,res)=>{
    const username = req.params.username;

    MerchantUser.find({username:username},(err,data)=>{
        if(err)
            res.send({found:false})
        res.send({found:true})
    });
})

router.post('/merchant/register',(req,res)=>{
    const newUser = {
        Username:req.body.username,
        Password:hashPassword(req.body.password)
    }
    MerchantUser.create(newUser).then(()=>{
        console.log("user created !")
        res.send("user Created !")
    }).catch((err)=>{
        console.log(err);
        res.send("user not created !")
    })
})

router.post('/merchant/add/:merchantId',(req,res)=>{
    const newMerchant = {
        RestaurantName: req.body.RestaurantName,
        OwnerName:req.body.OwnerName,
        MobileNumber:req.body.MobileNumber,
        Address:req.body.Address,
        Price:req.body.Price,
        TodaysMenu:req.body.TodaysMenu
    };
    Merchant.insertMany(newMerchant).then((el)=>{
        console.log("ok")
    }).catch((err)=>{
        console.log(err)
    });
    res.send("ok");
});

module.exports = router;