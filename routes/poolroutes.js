const router = require('express').Router()
const poolcontroller =require('../controllers/poolcontroller')


//pool
router.post('/addpool',poolcontroller.addPool)

module.exports =router