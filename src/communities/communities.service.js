const { findcommunities, findctbyid, insertct, deleteid, editct } = require("./communities.repository");

const getallcommunities = async (name) => {
    const ct = await findcommunities(name);

    return ct;
}

const getallcommunitiesbyid = async (id) => {
    const ct = await findctbyid(id);

    if(!ct){
        throw Error("communities id not found")
    }
    return ct
}

const createct = async (ctdata) => {
    const ct = await insertct(ctdata);

    return ct;
}

const deletecommunities = async (id) => {
    await getallcommunitiesbyid(id);
    await deleteid(id);
}

const updatect = async (id, ctdata) => {
    await getallcommunitiesbyid;
    const ct = await editct(id, ctdata);

    return ct;
}

module.exports = {
    getallcommunities,
    getallcommunitiesbyid,
    createct,
    deletecommunities,
    updatect,

}