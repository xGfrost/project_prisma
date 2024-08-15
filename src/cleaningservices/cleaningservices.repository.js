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


module.exports = {
    findcs,
    findcsbyid,
    insertcs,


}