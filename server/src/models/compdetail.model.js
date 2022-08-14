module.exports = (sequalize, dataType) => {
    const Compdetails = sequalize.define("compdetails",
      {
        compdetail_id: {
          type: dataType.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        ceo_name: { 
            type: dataType.STRING,
            allowNull: false
        },
        manager: { 
            type: dataType.STRING,
            allowNull: false 
        },
        headquarter: {
            type: dataType.STRING,
            allowNull: false
        },
        employee_num: {
            type: dataType.INTEGER,
            allowNull: false
        }
      },
      {
        timestamps: true,
      }
    );
  
    return Compdetails;
};