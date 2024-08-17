const { findbadges, insertbg, deleteid, editbg } = require("./badges.repository");

const getallbadges = async () => {
    const bg = await findbadges();
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
}