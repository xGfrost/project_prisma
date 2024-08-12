const { findAdminpos, findadminbyid, insertadminpos, editadminpos, deleteid } = require("./adminpos.repository");

const getAlladminpos = async() => {
    const adminpos = await findAdminpos();

    return adminpos;
};

const getadminbyid = async(id) => {
    const adminpos = await findadminbyid(id);

    if(!adminpos){
        throw Error("admin id not found");
    }

    return adminpos;
} 

const createadminpos = async() =>{
    const adminpos = await insertadminpos();

    return adminpos
}

const updateadminpos = async(id, adminposdata) =>{
    await getadminbyid;

    const adminpos = await editadminpos(id,adminposdata);

    return adminpos;
}

const deleteadminpos = async (id) => {
    await getadminbyid(id);
    await deleteid(id)

}




module.exports = {
    getAlladminpos,
    getadminbyid,
    createadminpos,
    updateadminpos,
    deleteadminpos,

}