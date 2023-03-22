const model = require("../models/model");

const getAllDataStatic = async (req, res) => {
  try {
    const products = await model.find({}).select("name price");
    res.status(200).send({ products, Hits: products.length });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllData = async (req, res) => {
  try {
    const { featured, company, name, sort, fields } = req.query;
    const queryObjects = {};

    if (featured) {
      queryObjects.featured = featured === true ? true : false;
    }
    if (company) {
      queryObjects.company = company;
    }
    if (name) {
      queryObjects.name = { $regex: name, $options: "i" };
    }

    let result = model.find(queryObjects);

    if (sort) {
      const sortList = sort.split(",").join(" ");
      result = result.sort(sortList);
    } else {
      result = result.sort("createdAt");
    }

    if (fields) {
      const fieldList = fields.split(",").join(" ");
      result = result.select(fieldList);
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit);

    const products = await result;
    res.status(200).send({ products, Hits: products.length });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { getAllDataStatic, getAllData };
