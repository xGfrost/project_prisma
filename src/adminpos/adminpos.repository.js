const prisma = require("../db");

const findAdminpos = async(location) => {
    const admin = await prisma.admin_pos.findMany({
        where:{
            location:{
                contains: location
            }
        }
    })

    return admin;
}

const findadminbyid = async (id) => {
    const adminpos = await prisma.admin_pos.findUnique({
        where:{
            id: id,
        }
    })
    return adminpos;
}

const insertadminpos = async (adminposdata) => {
    const adminpos = await admin_pos.create({
        data:{
            name: adminposdata.name,
            descriptions: adminposdata.descriptions,
            location: adminposdata.location
        }
    })
    return adminpos;
}

const deleteid = async (id) =>{
    await prisma.admin_pos.delete({
        where:{
            id,
        }
    })
};

const editadminpos = async(id, adminposdata)=>{
    const adminpos = await prisma.admin_pos.update({
        where:{
            id:id,
        },
        data:{
            name: adminposdata.name,
            descriptions: adminposdata.descriptions,
            location: adminposdata.location
        }
    })
    return adminpos;
}

module.exports = {
    findAdminpos,
    findadminbyid,
    insertadminpos,
    editadminpos,
    deleteid,


}