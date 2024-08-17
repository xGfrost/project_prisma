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

module.exports = {
    findcommunities,
    findctbyid,
}