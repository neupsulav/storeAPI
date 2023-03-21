const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({});

module.exports = new mongoose.model("store", storeSchema);
