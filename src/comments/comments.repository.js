const prisma = require("../db");

const insertComments = async (commentsData) => {
    const comments = await prisma.comments.create({
        data:{
            user_id: commentsData.user_id,
            blog_id: commentsData.blog_id,
            content: commentsData.content
            
        }
    });
    return comments;
}

module.exports={
    insertComments,

}