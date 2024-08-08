import express, { Request, Response } from 'express';
import multer from 'multer';
import knex from 'knex';
import NewsDetail from '../model/NewsDetail';
import { options } from '../options/mysql.config';

const storage = multer.diskStorage({
    destination: function (_req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });
const router = express.Router();
const database = knex(options);

router.get('/', async (req: Request, res: Response) => {
    try {
        const databaseNews = await database('news').select('*');
        const transformedNews = databaseNews.map(newsItem => {
            if (newsItem.tags) {
                newsItem.tags = newsItem.tags.split(',');
            }
            return newsItem;
        });
        res.send(transformedNews);
    } catch (error) {
        res.status(500).send({ error: 'Error al obtener noticias' });
    }
});

router.post('/', async (req: Request, res: Response) => {
    try {
        let news = new NewsDetail();

        if (!news.getTitle() || !news.getContent()) {
            return res.status(400).send({ err: 'Data is required' });
        }
        news.getProfile().setId("b4f27e9a-446a-4eb2-bb12-71a5c88a7528")
            const databaseNews = await database('news').insert({
                news_id: news.getId(),
                title: news.getTitle(),
                content: news.getContent(),
                profile_id: "b4f27e9a-446a-4eb2-bb12-71a5c88a7528",
                read_time: news.getReadTime(),
                date: news.getDate()
        });
        res.status(201).send({ message: 'News created!', news, databaseNews });
    } catch (error) {
        res.status(500).send({ error: 'Error al enviar noticias' });
    }
});

export default router;
