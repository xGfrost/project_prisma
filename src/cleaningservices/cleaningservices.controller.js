const express =require('express');
const { getAllcs } = require("./cleaningservices.service");
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

module.exports = router;