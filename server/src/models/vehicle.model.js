module.exports = (sequalize, dataType) => {
    const Vehicle = sequalize.define('bikes', {
        v_id: {
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        v_name: {
            type: dataType.STRING
        },
        v_milage: {
            type: dataType.STRING
        },
        v_launchyear: {
            type: dataType.STRING
        }
    },
    {
        timestamps: true,
    }
    );
    return Vehicle;
};