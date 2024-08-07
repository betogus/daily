const express = require("express");
const options = require('../options/mysql.config');
const multer = require("multer");


const storage = multer.diskStorage({
    destination:function(_req, file, cb) {
        cb(null, "uploads")
    },
    filename:function(req, file, cb) {
        cb(null, Date.now()+ "-" + file.originalname)
    }
})

const upload = multer({storage});
const router = express.Router()
const knex = require('knex');
const database = knex(options);


router.get('/', async (req, res) => {
    try {
        const databaseNews = await database('news').select('*');
        const transformedNews = databaseNews.map(newsItem => {
            if (newsItem.tags) {
                newsItem.tags = newsItem.tags.split(','); 
            }
            return newsItem;
        });
        console.log(transformedNews)
        res.send(transformedNews);
    } catch (error) {
        console.error('Error al obtener noticias:', error);
        res.status(500).send({ error: 'Error al obtener noticias' });
    }
});

router.post('/', upload.single("myFile"), (req, res, next) => {
    const file = req.file;
    if (!file) {
        const error = new Error("Please upload a file")
        error.httpStatusCode = 400
        return next(error)
    }
    let news = req.body
    if (!news.title || !news.content) {
        return res.status(400).send({err: "Data is required"})
    }
    databaseNews.push(news)
    res.send({message: "News created!", news, databaseNews})
}) 

module.exports = router