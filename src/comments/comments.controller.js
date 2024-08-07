const express = require('express');
const{ createComments } = require("./comments.service");
const router = express.Router();

router.post("/", async(req,res) =>{
    try {
        const commentsData = req.body;

        const comments = await createComments(commentsData);

        res.send({
            data:comments,
            message:"Success"
        })
    } catch (error) {
        res.status(400).send(error.message);
    }
})


module.exports = router;