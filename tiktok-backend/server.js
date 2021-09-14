import express from "express";
import mongoose from "mongoose";

import Data from "./data.js";
//WHAT
import Videos from "./dbModel.js";

//app config
const app = express();

const port = 9000;

//middlewares
app.use(express.json());
//  we want this to be run befroe any api call:
app.use((req, res, next) => {
  res.setHeaders("Access-Control-Allow-Origin", "*"), res.setHeaders("Access-Control-Allow-Headers", "*"), next();
});

//DB config
const connection_url =
  "mongodb+srv://thomasknashville:Kat389518!@cluster0.6hpos.mongodb.net/tiktok?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//API endpoints

app.get("/", (req, res) => res.status(200).send("hello, world!"));
app.get("/v1/posts", (req, res) => res.status(200).send(Data));
app.post("/v2/posts", (req, res) => {
  //add data to db, add a VIDEO to videos COLLECTION
  const dbVideos = req.body;

  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//     retrieve the data you posted
app.get("/v2/posts", (req, res) => {
  //.find can have a {filter} if you want one
  Videos.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//listener

app.listen(port, () => console.log(`listening on localhost:${port}`));
