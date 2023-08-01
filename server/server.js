const convert = require("./convert");

convert("PHP", "USD", 10)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
