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

const createwr = async (wrdata) => {
    const wr = await insertwr(wrdata);

    return wr;
}

const deletewr = async (id) => {
    await getallwsbyid(id);
    await deleteid(id);
}

const updatewr = async (id, wrdata) => {
    await getallwsbyid(id);
    const wr = await editwr(id, wrdata);

    

    return wr;
}

module.exports ={
    getallws,
    getallwsbyid,
    createwr,
    deletewr,
    updatewr,


}