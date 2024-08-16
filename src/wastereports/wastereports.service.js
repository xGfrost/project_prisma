const { findwr, findwrbyid, insertwr } = require("./wastereports.repository");

const getallws = async (location) => {
    const ws = await findwr(location);

    return ws;
}

const getallwsbyid = async (id) => {
    const ws = await findwrbyid(id);

    if(!ws){
        throw Error("waste reports id not found");
    }

    return ws;
}

const createws = async (wsdata) => {
    const ws = await insertwr(wsdata);

    return ws;
}

module.exports ={
    getallws,
    getallwsbyid,
    createws

}