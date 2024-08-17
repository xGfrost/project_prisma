const express = require('express');
const dotenv = require('dotenv');
// const moment = require('moment')

const app = express();

dotenv.config();



const PORT = process.env.PORT;

const upload = require('./middleware/multer');
const middlewareLogRequest = require('./middleware/logs')


app.use(express.json());
app.use(middlewareLogRequest);
app.use(express.urlencoded({ extended:true}));
app.use('/assets', express.static('./public/images'));

const blogsController = require("./blogs/blogs.controller");
const educationsController = require("./educations/educations.controller");
const commentsController = require("./comments/comments.controller");
const adminController = require("./adminpos/adminpos.controller");
const cleaningservicesController = require("./cleaningservices/cleaningservices.controller");
const wastereportsController = require("./wastereports/wastereports.controller");
const communitiesController = require("./communities/communities.controller");

app.use('/blogs',upload.single('image'), blogsController);
app.post('/upload', upload.single('image'), (req, res) => {
    res.json({
        data:req.filter,
        message: 'Upload Berhasil'
    })
})

app.use('/educations',upload.single('image'), educationsController);
app.post('/upload', upload.single('image'), (req, res) => {
    res.json({
        data:req.filter,
        message: 'Upload Berhasil'
    })
})

app.use('/comments',upload.none(), commentsController);
app.use('/admin_pos',upload.none(), adminController);
app.use('/cleaningservices', upload.none(), cleaningservicesController);

app.use('/wastereports',upload.single('image'), wastereportsController);
app.post('/upload', upload.single('image'), (req, res) => {
    res.json({
        data:req.filter,
        message: 'Upload Berhasil'
    })
})

app.use('/communities',upload.single('image'), communitiesController);
app.post('/upload', upload.single('image'), (req, res) => {
    res.json({
        data:req.filter,
        message: 'Upload Berhasil'
    })
})

app.listen(PORT, () => {
    console.log("express API runningin port: " + PORT);
});