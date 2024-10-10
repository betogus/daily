import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import session from "express-session";
import newsRouter from "./routes/newsRoute";
import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';
import passport from 'passport';
import {initializePassport } from './config/passport.config'

const app = express();
const port = 8080;
const server = app.listen(port, () => console.log(`Server up on port ${port}`));

const connection = mongoose.connect('mongodb://localhost:27017/backusers')
    .then(() => {
        console.log("Conectado a MongoDB");
    })
    .catch((err) => {
        console.error("Error al conectar a MongoDB:", err);
    });

let baseSession = session({
    store: MongoStore.create({mongoUrl: 'mongodb://localhost:27017/backsessions'}),
    secret: 'c0d3r',
    resave: true,
    saveUninitialized: true
})
    
initializePassport()
app.use(passport.initialize())
app.use(passport.session())

app.use(baseSession)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/news', newsRouter);




