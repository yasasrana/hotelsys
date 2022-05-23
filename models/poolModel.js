module.exports =(sequelize,DataTypes) =>{

    const Pool = sequelize.define("pool",{
         firstname:{
             type: DataTypes.STRING,
             allowNull:false
         },
         lastname:{
            type: DataTypes.STRING,
             allowNull:false
         },
         maxadult:{
            type: DataTypes.STRING,
             allowNull:false
         },
         maxchildren:{
            type: DataTypes.STRING,
             allowNull:false
         },
         total:{
         type: DataTypes.STRING
         },
         date:{
            type: DataTypes.DATEONLY
         },
         time:{
            type: DataTypes.TIME
         }
        
        
    })

    return Pool
}