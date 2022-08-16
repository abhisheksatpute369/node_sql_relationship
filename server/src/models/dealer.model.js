module.exports = (sequalize, dataType) => {
    const Dealer = sequalize.define('dealers', {
        d_id: {
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        d_name: {
            type: dataType.STRING
        },
        d_phone: {
            type: dataType.INTEGER
        },
        d_email: {
            type: dataType.STRING
        },
        d_address: {
            type: dataType.STRING
        }
    },
    {
        timestamps: true,
    }
    );
    return Dealer;
};