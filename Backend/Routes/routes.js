const express = require('express');
const Merchant = require('../DataBase/Models/Merchant')
const MerchantUser = require('../DataBase/Models/MerchantDetails')
const hashPassword = require('md5')

const router = express.Router();

// router.get('/getallresturant',(req,res)=>{
//     Merchant.find({},(err,data)=>{
//         res.send({Resturant:data})
//     });
// })

router.get('/client/resturantbyaddress/:address',(req,res)=>{
    const address = req.params.address;
    Merchant.find({Address:address},(err,data)=>{
        if(err)
            res.send("sorry not found resturant !, plz enter valid resturant name.")
        res.send({Status:1,Restaurants:data})
    })
})

router.post('/merchant/login',(req,res)=>{
    const username = req.body.username;
    const password = hashPassword(req.body.password);
    MerchantUser.find({Username:username,Password:password},(err,data)=>{
        if(err)
            res.send({Status:0})
        if(data.length == 0)
            res.send({Status:0});
        else
        {
            res.send({Status:1,username:data[0].Username,UserId:data[0]._id})
        }
    })
})

router.get('/merchant/getuserbyusername/:username',(req,res)=>{
    const username = req.params.username;

    MerchantUser.find({Username:username},(err,data)=>{
        if(err)
            res.send({Status:0,error:err})
        if(data.length == 0)
            res.send({Status:0,error:'User not found !'})
        else
            res.send({Status:1,Username:data[0].Username})
    });
})

router.post('/merchant/register',(req,res)=>{
    console.log("regiser user");
    const newUser = {
        Username:req.body.username,
        Password:hashPassword(req.body.password)
    }
    MerchantUser.find({Username:req.body.username},(err,data)=>{
        if(err)
            res.send({Status:0,error:err});
        if(data.length == 0)
        {
            MerchantUser.create(newUser).then((data)=>{
                res.send({Status:1,UserId:data._id,Username:data.Username})
            }).catch((err)=>{
                console.log(err);
                res.send({Status:0,error:err})
            })
        }else
        {
            res.send({Status:0,error:"Username already exists !"})
        }
    })
    
})

router.post('/merchant/add/:merchantId',(req,res)=>{
    const newMerchant = {
        _MerchantId: req.body.MerchantId,
        RestaurantName: req.body.RestaurantName,
        OwnerName:req.body.OwnerName,
        MobileNumber:req.body.MobileNumber,
        Address:req.body.Address,
        Price:req.body.Price,
        TodaysMenu:req.body.TodaysMenu
    };
    Merchant.insertMany(newMerchant).then((el)=>{
        res.send({Status:1,MerchantDetails:el})
    }).catch((err)=>{
        res.send({Status:0,error:err})
    }); 
});

router.post('/merchant/update/:profileId',(req,res)=>{
    const profileId = req.params.profileId;
    const newMerchant = {
        _MerchantId: req.body.MerchantId,
        RestaurantName: req.body.RestaurantName,
        OwnerName:req.body.OwnerName,
        MobileNumber:req.body.MobileNumber,
        Address:req.body.Address,
        Price:req.body.Price,
        TodaysMenu:req.body.TodaysMenu
    };
    Merchant.updateOne({_id:profileId},newMerchant).then((el)=>{
        res.send({Status:1})
    }).catch((err)=>{
        res.send({Status:0,error:err})
    }); 
})

router.get('/merchant/get/profileId/:merchantId',(req,res)=>{
    const merchantId = req.params.merchantId;
    Merchant.find({_MerchantId:merchantId},(err,data)=>{
        if(err)
            res.send({Status:0,error:err});
        else
            res.send({Status:1,profileId:data[0]._id})
    })
})

router.post('/merchant/update/todaysmenu/:profileId',(req,res)=>{
    const todaysmenu = req.body.TodaysMenu;
    const profileId = req.params.profileId;
    Merchant.findByIdAndUpdate(profileId,{TodaysMenu:todaysmenu},(err,data)=>{
        if(err)
            res.send({Status:0,error:err});
        res.send({Status:1});
    })
})

module.exports = router;