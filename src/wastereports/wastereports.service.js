const { findwr } = require("./wastereports.repository");

const getallws = async (location) => {
    const ws = await findwr(location);

    return ws;
}

module.exports ={
    getallws,
    
}