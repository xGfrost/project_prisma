const { findcs, findcsbyid } = require("./cleaningservices.repository");

const getAllcs = async(address) => {
    const cs = await findcs(address);

    return cs;
}

const getcsbyid = async(id) => {
    const cs = await findcsbyid(id);

    if(!cs){
        throw Error("cleaning services id not found");
    }
    return cs;
}


module.exports = {
    getAllcs,
    getcsbyid,
    

}