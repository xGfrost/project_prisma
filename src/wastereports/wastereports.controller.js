const express = require('express');
const { getallws } = require("./wastereports.service");
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

module.exports = router;