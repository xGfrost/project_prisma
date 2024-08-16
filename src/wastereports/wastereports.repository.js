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
    const wr = await prisma.wastereports.findUnique({
        where:{
            id: id,
        },
        include:{
            user: true
        }
    })
    return wr;
}

const insertwr = async (wrdata) => {
    const wr = await prisma.wastereports.create({
        data:{
            user_id: wrdata.user_id,
            location: wrdata.location,
            description: wrdata.description,
            image: wrdata.image,
            point: parseInt(wrdata.point) ,
            coin: parseInt(wrdata.coin) ,
            status: wrdata.status,
        }
    })
    return wr;
}

const deleteid = async (id) => {
    await prisma.wastereports.delete({
        where:{
            id: id,
        }
    });
}

const editwr = async (id, wrdata) => {
    const wr = await prisma.wastereports.update({
        where:{
            id: id
        },
        data:{
            status: wrdata.status,
        }
    })
    return wr;
}


module.exports = {
    findwr,
    findwrbyid,
    insertwr,
    editwr,
    deleteid,

}