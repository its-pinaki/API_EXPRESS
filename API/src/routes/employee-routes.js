const express = require('express');
const router = express.Router();
const Repo = require('../repos/employee-repos')

router.post('/',async(req,res)=>{
    try{
      console.log(req.body)
      await Repo.create(req.body);
      return res.status(201).send()
    }catch(e){
        return res.status(400).send(e);
    }
})

module.exports = router;