const { findwr, findwrbyid, insertwr, deleteid, editwr } = require("./wastereports.repository");

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

const deletewr = async (id) => {
    await getallwsbyid(id);
    await deleteid(id);
}

const updatewr = async (id, wrdata) => {
    await getallwsbyid(id);
    const ws = await editwr(id, wrdata);

    return ws;
}

module.exports ={
    getallws,
    getallwsbyid,
    createws,
    deletewr,
    updatewr,


}