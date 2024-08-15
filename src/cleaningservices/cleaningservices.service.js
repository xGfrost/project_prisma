const { findcs, findcsbyid, insertcs, deleteid, editcs } = require("./cleaningservices.repository");

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

const createcs = async (csdata) => {
    const cs = await insertcs(csdata);
    return cs;
}

const deletecs = async (id) => {
    await getcsbyid(id);
    await deleteid(id);
}

const updatecs = async (id, csdata) => {
    await getcsbyid(id);
    const cs = await editcs(id, csdata);

    return cs;
}


module.exports = {
    getAllcs,
    getcsbyid,
    createcs,
    deletecs,
    updatecs,


}