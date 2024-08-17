const express = require('express');
const { getallbadges, createbg, updatebg, getbgbyid } = require("./badges.service");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const name = req.query.name;
        let bg;
        if (name) {
            bg = await getallbadges(name);
        } else {
            bg = await getallbadges();
        }
        res.send(bg);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.get("/:id", async(req,res) => {
    try {
        const id = req.params.id
        const bg = await getbgbyid(id);
        res.send(bg);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.post("/", async(req, res) => {
    const {file} = req;
    const image = file.filename;
    try {
        const bgdata = req.body;
        bgdata.image = image;

        const bg = await createbg(bgdata);

        res.send({
            data: bg,
            message: "Success"
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.post("/update/:id", async(req, res) => {
    const {file} = req;
    const image = file.filename;
    try {
        const id = req.params.id
        const bgdata = req.body;
        bgdata.image = image;
        const bg = await updatebg(id, bgdata);
        
        
        res.send({
            data: bg,
            message:"Success"
        })
        
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = router;