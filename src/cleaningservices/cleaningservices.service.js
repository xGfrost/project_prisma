const { findcs } = require("./cleaningservices.repository");

const getAllcs = async(address) => {
    const cs = await findcs(address);

    return cs;
}


module.exports = {
    getAllcs,
    
}