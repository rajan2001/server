const express = require("express");

const state = require("./data/state");
const district = require("./data/district");
const crops = require("./data/crops");
const bodyParser = require("body-parser");
const cors = require("cors");
const districtInfo = require("./data/districtInfo");
const app = express();

const Port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.get("/states", (req, res) => {
  res.json(state);
});

app.get("/states/cities", (req, res) => {
  const searchTerm = req.query.name;
  const city = district.filter((city) => city.state === searchTerm);
  res.send(city);
});

app.get("/cities/crops", (req, res) => {
  const searchTerm = req.query.name;
  const crop = crops.filter((crop) => crop.city === searchTerm);
  res.send(crop);
});

app.get("/cities/crops/info", (req, res) => {
  const searchTerm1 = req.query.crop;
  const searchTerm2 = req.query.city;

  const information = districtInfo.filter(
    (info) => info.crop === searchTerm1 && info.city === searchTerm2
  );

  res.send(information);
});

app.listen(Port, () => {
  console.log(`listen on Port ${Port}`);
});
