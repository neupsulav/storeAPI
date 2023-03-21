const noRoute = (req, res) => {
  res.status(404).send("Nothing is available at this route");
};

module.exports = noRoute;
