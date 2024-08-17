const { findcommunities, findctbyid } = require("./communities.repository");

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

module.exports = {
    getallcommunities,
    getallcommunitiesbyid,


}