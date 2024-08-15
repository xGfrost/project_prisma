const prisma = require("../db");

const findcs = async(address) => {
    const cs = await prisma.cleaningservices.findMany({
        where:{
            address:{
                contains: address
            }
        }
    })
    return cs;
};

const findcsbyid = async (id) => {
    const cs = await prisma.cleaningservices.findUnique({
        where:{
            id: id,
        }
    })
    return cs;
}


module.exports = {
    findcs,
    findcsbyid

}