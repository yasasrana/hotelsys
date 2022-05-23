const router = require('express').Router()
const parkingcontroller =require('../controllers/pakingcontroller')



//parkingslot
router.post('/addparkingslot',parkingcontroller.addParkingslot)
router.put('/:id',parkingcontroller.updateParkingslot)
router.get('/all',parkingcontroller.getAllparkingslots)
router.get('/:id' ,parkingcontroller.getOneParkingslot)
module.exports =router