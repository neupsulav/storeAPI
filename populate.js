const connection = require("./db/connection");
const store = require("./models/model");
require("dotenv").config();
const products = require("./products.json");

const populate = async () => {
  try {
    await connection(process.env.connectionString);
    await store.deleteMany({});
    await store.create(products);
    console.log("Successfully connected");
  } catch (error) {
    console.log(error);
  }
};

populate();
