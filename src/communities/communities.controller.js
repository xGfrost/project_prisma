const express = require('express');
const { getallcommunities, getallcommunitiesbyid } = require("./communities.service");
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

module.exports = router;