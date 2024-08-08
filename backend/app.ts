import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import newsRouter from "./routes/newsRoute";
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/news', newsRouter);

const server = app.listen(port, () => console.log(`Server up on port ${port}`));

export default server;
