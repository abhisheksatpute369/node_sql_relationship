module.exports = (sequalize, dataType) => {
    const Company = sequalize.define("company",
      {
        comp_id: {
          type: dataType.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        comp_name: { 
            type: dataType.STRING,
            allowNull: false
        },
        email: { 
            type: dataType.STRING,
            allowNull: false 
        },
        origin: {
            type: dataType.STRING,
            allowNull: false
        }
      },
      {
        timestamps: true,
      }
    );
  
    return Company
};