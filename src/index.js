const express = require('express');
const dotenv = require('dotenv');

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

app.use('/blogs',upload.single('image'), blogsController);
app.post('/upload', upload.single('image'), (req, res) => {
    res.json({
        data:req.filter,
        message: 'Upload Berhasil'
    })
})

app.listen(PORT, () => {
    console.log("express API runningin port: " + PORT);
});