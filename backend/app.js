const fs = require("fs");
const express = require("express");
const cors = require("cors");

const data = JSON.parse(fs.readFileSync(`${__dirname}/data/data.json`));

const app = express();

app.use(cors());

app.get("/meals", (req, res) => {
  res.status(200).json({ status: "success", data: { meals: data.meals } });
});

app.get("/ingredients", (req, res) => {
  res
    .status(200)
    .json({ status: "success", data: { ingredients: data.ingredients } });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
