const { findBlogs, findBlogsById, insertBlogs } = require("./blogs.repository");

const getAllBlogs = async() => {
    const blogs = await findBlogs();

    return blogs;
};

const getBlogsById = async (id) => {
    const blogs =  await findBlogsById(id);

    return blogs;
}

const createBlogs = async  (blogsData) => {
    const blogs = await insertBlogs(blogsData);

    return blogs;
}


module.exports ={
    getAllBlogs,
    getBlogsById,
    createBlogs,
}