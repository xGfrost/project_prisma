const { insertComments } = require("./comments.repository");

const createComments = async (commentsData)=>{
    const comments = await insertComments(commentsData);

    return comments
}

module.exports ={
    createComments,
    
}