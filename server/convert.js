const axios = require("axios");

const convert = (from, to, amount) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
      )
      .then((res) => {
        resolve({
          amount: res.data.amount,
          date: res.data.date,
          from: res.data.base,
          to: res.data.rates,
        });
      })
      .catch((err) => {
        reject({ error: "Error" });
      });
  });
};

convert("USD", "PHP", 1)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
