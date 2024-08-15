const prisma = require("../db");

const findBlogs = async(description) => {
    const blogs = await prisma.blogs.findMany({
        where:{
            type: "Education",
            AND:{
                description:{
                    contains: description
                }
            }
        },
        include:{
            comments:true
        }
    });

    return blogs;
};

const findBlogsById = async (id) => {
    const blogs = await prisma.blogs.findUnique({
        where:{
            id: id,
            AND: {
                type: "Education"
            }
        },
        include:{
            comments:true
        }
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

const deleteid = async(id) => {
    await prisma.blogs.delete({
        where:{
            id:id,
        },
    });
}

const editBlogs = async (id, blogsData) => {
    const blogs = await prisma.blogs.update({
        where:{
            id: id
        },
        data:{
            name: blogsData.name,
            description:blogsData.description,
            image: blogsData.image,
            status:blogsData.status,
            type:blogsData.type,
            video_url:blogsData.video_url,
        }
    })
    return blogs;
}


module.exports = {
    findBlogs,
    findBlogsById,
    insertBlogs,
    deleteid,
    editBlogs,
}