const { findwr, findwrbyid } = require("./wastereports.repository");

const getallws = async (location) => {
    const ws = await findwr(location);

    return ws;
}

const getallwsbyid = async (id) => {
    const ws = await findwrbyid(id);

    return ws;
}

module.exports ={
    getallws,
    getallwsbyid,

}