const { Sequelize, DataTypes } = require('sequelize')
const dbconfig = require('../config/db.config')


const sequelize = new Sequelize(

    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD,{
        host: dbconfig.HOST,
        dialect: dbconfig.dialect,
        operatorsAliases:false,

        pool: {
            max: dbconfig.pool.max,
            min: dbconfig.pool.min,
            acquire: dbconfig.pool.acquire,
            idle:dbconfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then( ()=>{
    console.log('connected...')
})
.catch(err =>{
    console.log('Error'+err)
})

const db ={}

db.Sequelize =Sequelize
db.sequelize =sequelize

db.pools =require('./poolModel.js')(sequelize,DataTypes)
db.parkings =require('./parkingModel.js')(sequelize,DataTypes)
db.parkingslots =require('./parkingslotModel.js')(sequelize,DataTypes)

db.sequelize.sync({ force:false})
.then(()=>{
    console.log('yes re-sync done!')
})

//1 to one relation
db.parkingslots.hasOne(db.parkings,{
    foreignKey:'parkingslot_id',
    as: 'parking'
})

db.parkings.belongsTo(db.parkingslots,{
    foreignKey:'parkingslot_id',
    as: 'parkingslot'
})


module.exports =db