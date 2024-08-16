const moment = require('moment-timezone');
const prisma = require("../db");

const findwr = async (location) => {
    const cs = await prisma.wastereports.findMany({
        where:{
            location:{
                contains: location
            },
        },
        include:{
            user: true,
        }
    })
    return cs;
}

const findwrbyid = async (id) => {
    
}


module.exports = {
    findwr,

}