module.exports =(sequelize,DataTypes) =>{

    const Parking = sequelize.define("parking",{
         firstname:{
             type: DataTypes.STRING,
             allowNull:false
         },
         lastname:{
            type: DataTypes.STRING,
             allowNull:false
         },
         vehicletype:{
            type: DataTypes.STRING,
             allowNull:false
         },
         vehiregnum:{
            type: DataTypes.STRING,
             allowNull:false
         },
         arrivedate:{
            type: DataTypes.DATEONLY,
             allowNull:false
         },
         arrivetime:{
            type: DataTypes.TIME,
             allowNull:false
         },
         leavedate:{
            type: DataTypes.DATEONLY,
             allowNull:false
         },
         leavetime:{
            type: DataTypes.TIME,
             allowNull:false
         }
        
        
    })

    return Parking
}