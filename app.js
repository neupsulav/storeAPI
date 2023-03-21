const express = require("express");
const app = express();
const router = require("./routers/route");
const port = process.env.PORT || 3000;
const noRoute = require("./middlewares/noRoute");
const connection = require("./db/connection");
require("dotenv").config();

// routes
app.use("/api/store", router);

// middlewares
app.use(noRoute);
app.use(express.json());

const listen = async () => {
  try {
    await connection(process.env.connectionString);
    app.listen(port, () => {
      console.log(`server is listening to port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

listen();
