const prisma = require("../db");

const findbadges = async (name) => {
    const bg = await prisma.badges.findMany({
        where:{
            name:{
                contains:name
            }
        }
    })
    return bg;
}

const findbgid = async (id) => {
    const bg = await prisma.badges.findUnique({
        where:{
            id, id
        }
    })
    return bg;
}

const insertbg = async (bgdata) => {
    const bg = await prisma.badges.create({
        data:{
            name: bgdata.name,
            description: bgdata.description,
            image:bgdata.image
        }
    })
    return bg;
}

const deleteid = async (id) => {
    await prisma.badges.delete({
        where:{
            id: id,
        }
    })
}

const editbg = async (id,bgdata) => {
    const bg = await prisma.badges.update({
        where:{
            id: id,
        },
        data:{
            name: bgdata.name,
            description: bgdata.description,
            image:bgdata.image
        }
    })
    return bg;
}



module.exports = {
    findbadges,
    insertbg,
    deleteid,
    editbg,
    findbgid,

}