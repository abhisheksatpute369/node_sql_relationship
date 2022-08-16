

module.exports = (sequalize, dataType) => {

    const Deals = sequalize.define('deals', 
        {
                        
        },
    {
        timestamps: true,
    }
    );
    return Deals;
};