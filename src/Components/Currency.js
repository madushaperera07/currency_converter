import React, { useEffect, useState } from "react";
import DropdownL from "./DropdownL";
import DropdownR from "./DropdownR";
import axios from "axios";
import image from "../img/images.png";

function Currency() {
  const [CurrencyVal, setCurrencyVal] = useState("");
  const [DropdownRight, setDropdownRight] = useState("");

  const [rates, setRates] = useState([]);

  async function submit(e) {
    e.preventDefault();
    console.log(CurrencyVal);
    console.log(DropdownRight);
  }

  useEffect(() => {
    axios.get(`https://api.frankfurter.app/latest`).then((res) => {
      setRates([res.data.base, ...Object.keys(res.data.rates)]);
    });
  }, []);
  console.log(rates);

  return (
    <div class="full_container">
      <div class="currency_container">
        <div class="image_container">
          <img src={image} />
          <h3>CURRENCY CONVERTER</h3>
        </div>
        <form action="POST">
          <div class="input_container">
            <input
              placeholder="Enter the amount"
              name="text"
              onChange={(e) => {
                setCurrencyVal(e.target.value);
              }}
            />
          </div>

          <div class="dropdown_container">
            <DropdownL />
            <DropdownR
              rates={rates}
              onchangeCurrency={(e) => {
                setDropdownRight(e.target.value);
              }}
            />
          </div>

          <div class="button_container">
            <input
              type="submit"
              onClick={submit}
              class="btn btn-success px-3 button"
            />
          </div>
        </form>

        <p>Out Put</p>
      </div>

      <div>
        <p>Hello</p>
      </div>
    </div>
  );
}

export default Currency;
