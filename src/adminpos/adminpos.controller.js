const express = require('express');
const { getAlladminpos, getadminbyid, createadminpos, deleteadminpos, updateadminpos } = require("./adminpos.service");
const router = express.Router();

router.get("/", async(req, res) => {
    try {
        const adminpos = await getAlladminpos();
        res.send(adminpos);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.get("/:id", async(req, res) => {
    try {
        const id = req.params.id
        const adminpos = await getadminbyid(id);
        res.send(adminpos);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.post("/", async (req, res) => {
    try {
        const adminposdata = req.body;
        const adminpos = await createadminpos(adminposdata);
        res.send({
            data: adminpos,
            message: "success"
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post("/delete/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await deleteadminpos(id);
        res.send({
            message: "Successs",
        })
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post("/update/:id", async(req, res) => {
    try {
        const id = req.params.id;
        const adminposdata = req.body;
        const adminpos = await updateadminpos(id, adminposdata);
        res.send({
            data: adminpos,
            message: "SUccess",
        })
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = router;