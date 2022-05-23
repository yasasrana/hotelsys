const db= require('../models')


//create main model
const Parking = db.parkings
const Parkingslot =db.parkingslots



//create parkingslot

const addParkingslot = async (req,res) =>{

    try{ 
      let info ={
        name:req.body.name,
        
              }
 
 const parkingslot = await Parkingslot.create(info)
 res.status(200).send(parkingslot)
  
 }
 catch(error){
   res.status(500).send(error.message);
 }   
 
     
   
 }


//add parking

const addParking = async (req,res) =>{

   try{ 
     let info ={
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        vehicletype:req.body.vehicletype,
        vehiregnum:req.body.vehiregnum,
        arrivedate:req.body.arrivedate,
        arrivetime:req.body.arrivetime,
        leavedate: req.body.leavedate,   
        leavetime: req.body.leavetime, 
        parkingslot_id:req.body.parkingslot 
}

const parking = await Parking.create(info)
res.status(200).send(parking)
 console.log(req.file);
}
catch(error){
  res.status(500).send(error.message);
}   

    
  
}


// get single parking

const getOneParking = async (req,res) =>{

    try{let id = req.params.id
      let parking = await Parking.findOne({ where:{id:id}})
      res.status(200).send(parking)
    }catch(error){
      res.status(500).send(error.message)
    }
      
     
    }


    // get single parkingslot

const getOneParkingslot = async (req,res) =>{

    try{let id = req.params.id
      let parkingslot = await Parkingslot.findOne({ where:{id:id}})
      res.status(200).send(parkingslot)
    }catch(error){
      res.status(500).send(error.message)
    }
      
     
    }



    // update parkingslot

const updateParkingslot = async (req,res) =>{

    try{
      let info ={
     
     isdisable:req.body.isdisable,
     isreserve:req.body.isreserve,
       
   }
   
     let id = req.params.id
     
     const parkingslot = await Parkingslot.update( info, { where:{ id:id}})
     res.status(200).send('parking slot updated successful')
     }
     catch(error){
     res.status(500).send(error.message)
     } 
      
     }


     //get all parkingslots

const getAllparkingslots = async (req,res)=> {
   
    try { 
  
    
      const parkingslots = await Parkingslot.findAll();
      
   
   res.status(200).send(parkingslots)
  
      
    } catch (error) {
      res.status(500).send(error.message);
      
    }
    
  
  }

module.exports ={
    addParking,
    addParkingslot,
    getOneParking,
    updateParkingslot,
    getAllparkingslots,
    getOneParkingslot
}