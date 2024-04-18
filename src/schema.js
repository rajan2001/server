const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
  name: String,
  districtId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "District",
  }],
});

const districtSchema = new mongoose.Schema({
  name: String,
  cropId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "District",
  }],
});

const cropSchema = new mongoose.Schema({
  name: String,
});

const State = mongoose.model("State", stateSchema);
const District = mongoose.model("District", districtSchema);
const Crop = mongoose.model("Crop", cropSchema);

module.exports = { State, District, Crop };
