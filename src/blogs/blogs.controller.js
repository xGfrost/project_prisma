const express = require('express');
const { getAllBlogs, getBlogsById, createBlogs, deleteBlogs, updateBlogs } = require("./blogs.service");
const router = express.Router();

router.get("/", async(req, res) => {
    try {
        const description = req.query.description;
        let blogs;
        if (description) {
            
             blogs = await getAllBlogs(description);

        
        } else {
             blogs = await getAllBlogs();
               
        }
        res.send(blogs); 
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.get("/:id", async(req,res) => {
    try {
        const id = req.params.id
        const blogs = await getBlogsById(id);
        res.send(blogs);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.post("/", async(req, res) => {
    const {file} = req;
    const image = file.filename;
    try {
        const blogsData = req.body;
        blogsData.image = image;

        const blogs = await createBlogs(blogsData);

        res.send({
            data: blogs,
            message: "Success"
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.post("/delete/:id", async(req, res) => {
    try {
        const id = req.params.id
        await deleteBlogs(id);
        res.send({
            message:"Success"
        })

    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post("/update/:id", async(req, res) => {
    const {file} = req;
    const image = file.filename;
    try {
        const id = req.params.id
        const blogsData = req.body;
        blogsData.image = image;
        const blogs = await updateBlogs(id, blogsData);
        
        
        res.send({
            data: blogs,
            message:"Success"
        })
        
    } catch (error) {
        res.status(400).send(error.message);
    }
})



module.exports = router;