var express = require('express');
var router = express.Router();
router.get('/',(req,res)=>{
    let ran=Math.floor(Math.random()*100)+1;
    let data=req.query.x;
    console.log(data);
    res.send('Math.cos('+ran+') is: '+Math.cos(ran)+' Math.asin('+ran+') is:  '+Math.sin(ran)+ ' Math.asinh('+ran+') is:  '+Math.asinh(ran)
    );
})
 
module.exports=router