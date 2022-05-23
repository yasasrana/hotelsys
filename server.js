const express = require('express')
const cors = require('cors')
const req = require('express/lib/request')
const res = require('express/lib/response')
const mysql      = require('mysql2');

const app= express()

var corOptions ={
      origin : 'https://localhost:8000'
}













//middleware
app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({extended :true}))



//routers

const router1 =require('./routes/parkingroutes')
app.use('/api/parkings',router1)

const router2 =require('./routes/poolroutes')
app.use('/api/pools',router2)

const router3 =require('./routes/parkingslotroutes')
app.use('/api/parkinigslots',router3)


//port

const PORT = process.env.PORT ||8000

//server

app.listen(PORT,() =>{
    console.log(`server is runing port ${PORT}`)
})