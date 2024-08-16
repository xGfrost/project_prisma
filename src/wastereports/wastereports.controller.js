const express = require('express');
const { getallws, getallwsbyid, createws, deletewr, updatewr, createwr } = require("./wastereports.service");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const location = req.query.location;
        let ws;
        if (location) {
            ws = await getallws(location);
        } else {
            ws = await getallws();
        }
        res.send(ws);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.get("/:id", async (req,res) => {
    try {
        const id = req.params.id;
        const wr = await getallwsbyid(id);

        res.send(wr);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post("/", async (req, res) => {
    const {file} = req;
    const image = file.filename;
    try {
        const wrdata = req.body;
        wrdata.image = image;

        const wr = await createwr(wrdata);

        res.send({
            data: wr,
            message: "Success"
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post("/delete/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await deletewr(id);
        res.send({
            message:"Success"
        })
    } catch (error) {
        req.status(400).send(error.message);
    }
})

router.post("/update/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const wsdata = req.body;
        const ws = await updatewr(id, wsdata);

        res.send({
            data: ws,
            message:"Success"
        })
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = router;