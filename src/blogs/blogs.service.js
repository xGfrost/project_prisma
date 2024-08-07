const { findBlogs, findBlogsById, insertBlogs, deleteid, editBlogs } = require("./blogs.repository");

const getAllBlogs = async() => {
    const blogs = await findBlogs();

    return blogs;
};

const getBlogsById = async (id) => {
    const blogs =  await findBlogsById(id);

    if(!blogs){
        throw Error("Product not found");
    }

    return blogs;
}

const createBlogs = async  (blogsData) => {
    const blogs = await insertBlogs(blogsData);

    return blogs;
}

const deleteBlogs = async (id) =>{
    await getBlogsById(id);
    await deleteid(id);

}

const updateBlogs = async(id, blogsData) =>{
    await getBlogsById(id);

    const blogs = await editBlogs(id, blogsData)
    return blogs;
}


module.exports ={
    getAllBlogs,
    getBlogsById,
    createBlogs,
    deleteBlogs,
    updateBlogs

}