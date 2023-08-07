const convert = require("./convert");
const express = require("express");
const app = express();

const cors = require("cors");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/api", (req, res) => {});

app.post("/api", cors(), async (req, res) => {
  const { CurrencyVal, DropdownLeft, DropdownRight } = req.body;
  convert(DropdownLeft, DropdownRight, CurrencyVal)
    .then((data) => {
      console.log(data.from);
      res.json({
        amount: data.amount,
        date: data.date,
        from: data.from,
        to: data.to,
        converted: data.converted,
      });
    })
    .catch((err) => {
      res.json({
        error: err.error,
      });
    });
});

app.listen(9000, () => {
  console.log("9000");
});
