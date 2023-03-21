const getAllDataStatic = async (req, res) => {
  try {
    res.status(200).json({ msg: "Getting all static data" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllData = async (req, res) => {
  try {
    res.status(200).json({ msg: "Getting all data" });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { getAllDataStatic, getAllData };
