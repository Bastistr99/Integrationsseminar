import express from "express";
import cors from "cors";
import mongoose from 'mongoose';
import 'dotenv/config'


const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@integrationsseminar.btrdy.mongodb.net/Integrationsseminar?retryWrites=true&w=majority`;
import Review from "./models/review.js";
import Product from "./models/produkte.js";
import ProduktModel from "./models/produkte2.js";


const app = express();

app.use(express.json());
app.use(cors());

const body = [];

mongoose.connect(uri).then(res => app.listen(3001, () => {
  console.log("Listening on Port 3001");
})).catch((err) => console.log(err))

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/send_review", (req, res) => {
  console.log(req.body.fragen)
  const review = new Review({
    id: req.body.id,
    fragen: req.body.fragen,
    antwort: req.body.antwort
  });

  review.save().then((result) => {
    res.send(result)
    console.log(result.body)
  }).catch((err) => {
    console.log(err)
  })
  body.push(review);
});


app.post("/produkte", (req, res) => {
  const produkt = new Product({
    id: body.length + 1,
    name: "Staubsauger 45 GTI",
    kategorie: "Staubsauger",
    uvp: 15
  });

produkt.save().then((result) => {
    res.send(result)
  }).catch((err) => {
    console.log(err)
  })
});



app.get("/get_produkte", async (req, res) => {
  let ergebnis;
  try {
    ergebnis = await ProduktModel.find();
    console.log(ergebnis);
    return res.json(ergebnis);
  }
  catch {
    console.log("fehler");
  }
  
})



