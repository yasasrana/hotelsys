module.exports =(sequelize,DataTypes) =>{

    const Parkingslot = sequelize.define("parkingslot",{
         name:{
             type: DataTypes.STRING,
             allowNull:false
         },
         isdisable:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
         },
         isreserve:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
         }
        
        
    })

    return Parkingslot
}