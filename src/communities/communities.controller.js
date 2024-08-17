const express = require('express');
const { getallcommunities, getallcommunitiesbyid, createct, deletecommunities, updatect } = require("./communities.service");
const router = express.Router();

router.get("/", async (req, res) => {

    try {
        const name = req.query.name
        let ct;
        if (name) {
            ct = await getallcommunities(name);
        } else {
            ct = await getallcommunities();
        }
        res.send(ct);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const ct = await getallcommunitiesbyid(id);

        res.send(ct)
    } catch (error) {
        res.status(400).send("Success");
    }
})

router.post("/", async (req,res) => {
    const {file} = req;
    const image = file.filename;
    try {
        const ctdata= req.body;
        ctdata.image = image;
        const ct = await createct(ctdata);
        res.send({
            data: ct,
            message:"Success"
        })
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post("/delete/:id", async (req,res) => {
    try {
        const id = req.params.id;
        await deletecommunities(id)
        res.send({
            message:"Success"
        })
    } catch (error) {
        res.status(400).message(error.message);
    }
})

router.post("/update/:id", async (req,res) => {
    const {file} = req;
    const image = file.filename;
    try {
        const ctdata = req.body;
        ctdata.image = image;
        const ct = await updatect(id, ctdata);

        res.send({
            data: ct,
            message:"Success"
        })
    } catch (error) {
        res.status(400).message(error.message);
    }
})

module.exports = router;