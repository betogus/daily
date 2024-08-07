const express = require("express");
const newsRouter = require("./routes/news");
const app = express()
const cors = require('cors');

const server = app.listen(8080, () => console.log("Server up"))

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use("/news", newsRouter)

