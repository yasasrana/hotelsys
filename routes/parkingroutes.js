const router = require('express').Router()
const parkingcontroller =require('../controllers/pakingcontroller')
const poolcontroller =require('../controllers/poolcontroller')

//parking
router.post('/addparking',parkingcontroller.addParking)

router.get('/:id' ,parkingcontroller.getOneParking)



module.exports =router