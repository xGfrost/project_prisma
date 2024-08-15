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


module.exports = {
    findcs,

}