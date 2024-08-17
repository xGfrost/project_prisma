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
}



module.exports = {
    findbadges,
    insertbg,
    deleteid,
    editbg,

}