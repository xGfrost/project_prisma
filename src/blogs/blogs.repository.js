const prisma = require("../db");

const findBlogs = async() => {
    const blogs = await prisma.blogs.findMany();

    return blogs;
};

const findBlogsById = async (id) => {
    const blogs = await prisma.blogs.findUnique({
        where:{
            id:id,
        },
    });
    return blogs;
};

const insertBlogs = async (blogsData) => {
    const blogs = await prisma.blogs.create({
        data:{
            name: blogsData.name,
            description:blogsData.description,
            image: blogsData.image,
            status:blogsData.status,
            type:blogsData.type,
            video_url:blogsData.video_url,
        }
    });
    return blogs;
}


module.exports = {
    findBlogs,
    findBlogsById,
    insertBlogs,
}