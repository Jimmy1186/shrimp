const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('home page')
})

router.get('/data1',(req,res)=>{
    res.send({data:'17',value:40})
})

module.exports = router;