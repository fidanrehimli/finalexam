const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dotenv.config();
const { Schema } = mongoose;

const aranozaSchema = new Schema({
  image: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
});

const Aranoza = mongoose.model("Aranoza", aranozaSchema);

//!POST
app.post("/aranoza", async (req, res) => {
  try {
      const {image,title,price}=req.body
    const aranozapost = new Aranoza({
      image,
      title,
      price
    });
    await aranozapost.save();
    res.status(201).send(aranozapost);
  } catch (err) {
    res.status(500).send(err);
  }
});

//! GET
app.get("/aranoza", async (req, res) => {
  try {

    const aranozaget = await Aranoza.find({});
    res.status(200).send(aranozaget);
  } catch (err) {
    res.status(500).send(err);
  }
});

//! DELETE
app.delete("/aranoza/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const aranozadelete = await Aranoza.findByIdAndDelete(id);
    res.status(200).send(aranozadelete);
  } catch (err) {
    res.status(500).send(err);
  }
});

//! GETBYID
app.get("/aranoza/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const aranozagetbyid = await Aranoza.findById(id);
    res.status(200).send(aranozagetbyid);
  } catch (err) {
    res.status(500).send(err);
  }
});

//! UPDATE
app.put("/aranoza/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { image, title, price } = req.body;
    const aranozaupdate = await Aranoza.findByIdAndUpdate(id, {
      image,
      title,
      price,
    });
    res.status(200).send(aranozaupdate);
  } catch (err) {
    res.status(500).send(err);
  }
});

const PORT = process.env.PORT;
const DB = process.env.DB_URL;

app.listen(PORT, () => console.log("Port ise active", PORT));
mongoose.connect(DB).then(() => console.log("Connected!"));
