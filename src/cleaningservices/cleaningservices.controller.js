const express =require('express');
const { getAllcs, getcsbyid, createcs, deletecs, updatecs } = require("./cleaningservices.service");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const address = req.query.address;
        let cs;
        if (address) {
            cs = await getAllcs(address);
        } else {
            cs = await getAllcs();
        }
        res.send(cs);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const cs = await getcsbyid(id);
        res.send(cs);
    } catch (error) {
        res.status(400).send(error.message);
    }    
})

router.post("/", async (req, res) => {
    try {
        const csdata = req.body;
        const cs = await createcs(csdata);
        res.send(cs);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post("/update/:id", async (req, res) => {
    try {
        const id = req.params.id
        const csdata = req.body;
        const cs = await updatecs(id,csdata);
        res.send(cs);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post("/delete/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await deletecs(id);
        res.send({
            message:"Success"
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
})


module.exports = router;