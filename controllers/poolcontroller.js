const db= require('../models')


//create main model
const Pool = db.pools




//create parking

const addPool = async (req,res) =>{

    try{ 
      let info ={
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        maxadult:req.body.maxadult,
        maxchildren:req.body.maxchildren,
        total:req.body.total,
        date:req.body.date,
        time:req.body.time,
        
              }
 
 const pool = await Pool.create(info)
 res.status(200).send(pool)
  
 }
 catch(error){
   res.status(500).send(error.message);
 }   
 
     
   
 }





 module.exports ={
   addPool
}