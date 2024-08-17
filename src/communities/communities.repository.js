const prisma = require("../db");

const findcommunities = async (name) => {
    const ct = await prisma.communities.findMany({
        where:{
            name:{
                contains: name
            }
        }
    })
    return ct;
}

const findctbyid = async (id) => {
    const ct = await prisma.communities.findUnique({
        where:{
            id: id,
        }
    })
    return ct;
}

const insertct = async (ctdata) => {
    const ct = await prisma.communities.create({
        data:{
            user_id: ctdata.user_id,
            name:ctdata.name,
            description:ctdata.description,
            image:ctdata.image
        }
    })
    return ct;
}

const deleteid = async (id) => {
    await prisma.communities.delete({
        where:{
            id: id, 
        }
    })

}

const editct = async (id, ctdata) => {
    const ct = await prisma.communities.update({
        where:{
            id: id,
        },
        data:{
            name: ctdata.name,
            description: ctdata.description,
            image: ctdata.image,
        }
    })
    return ct;
}

module.exports = {
    findcommunities,
    findctbyid,
    insertct,
    deleteid,
    editct,

}