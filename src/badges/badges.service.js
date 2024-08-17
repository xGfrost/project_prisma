const { findbadges, insertbg, deleteid, editbg, findbgid } = require("./badges.repository");

const getallbadges = async () => {
    const bg = await findbadges();
    return bg;
}

const getbgbyid = async (id) => {
    const bg = await findbgid(id);
    if(!bg){
        throw Error("badges id not found");
        
    }
    return bg;
}

const createbg = async (bgdata) => {
    const bg = await insertbg(bgdata);
    return bg;
}

const deletebg = async (id) => {
    await deleteid(id);
}

const updatebg = async (id, bgdata) => {
    const bg = await editbg(id, bgdata);
    return bg;
}

module.exports ={
    getallbadges,
    createbg,
    deletebg,
    updatebg,
    getbgbyid,
}