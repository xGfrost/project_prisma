const moment = require('moment-timezone');
const prisma = require("../db");

const findcs = async(address) => {
    const cs = await prisma.cleaningservices.findMany({
        where:{
            address:{
                contains: address
            },
        },
        include:{
            user: true,
            
    
        }
    })
    return cs;
};

const findcsbyid = async (id) => {
    const cs = await prisma.cleaningservices.findUnique({
        where:{
            id: id,
        },
        include:{
            user:true,
        }
    })
    return cs;
}

const insertcs = async (csdata) => {
    const cs = await prisma.cleaningservices.create({
        data:{
            user_id: csdata.user_id,
            description:csdata.description,
            address:csdata.address,
            customer_contact:parseInt(csdata.customer_contact),
            cleaning_date:new Date(csdata.cleaning_date),
            status:Boolean(csdata.status)
        }
    })
    return cs;
}

const deleteid = async (id) => {
    await prisma.cleaningservices.delete({
        where:{
            id:id,
        },
    });
}

const editcs = async (id, csdata) => {
    const timeZone = 'Asia/Jakarta'; // Zona waktu lokal
    const localdate = moment.tz(csdata.cleaning_date, timeZone).format(); // Menggunakan moment-timezone

    const cs = await prisma.cleaningservices.update({
        where:{
            id:id
        },
        data:{
            user_id: csdata.user_id,
            description:csdata.description,
            address:csdata.address,
            customer_contact:parseInt(csdata.customer_contact),
            cleaning_date:localdate,
            status:Boolean(csdata.status)
        }
    })
    return cs;
}

module.exports = {
    findcs,
    findcsbyid,
    insertcs,
    editcs,
    deleteid


}