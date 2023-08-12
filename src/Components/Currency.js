import React, { useEffect, useState } from "react";
import DropdownL from "./DropdownL";
import DropdownR from "./DropdownR";
import axios from "axios";
import image from "../img/images.png";
import Calculator from "./Calculator";

function Currency() {
  const [CurrencyVal, setCurrencyVal] = useState("");
  const [DropdownLeft, setDropdownLeft] = useState("");
  const [DropdownRight, setDropdownRight] = useState("");

  const [rates, setRates] = useState([]);

  const [backend, setbackend] = useState([]);

  async function submit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api", {
        CurrencyVal,
        DropdownLeft,
        DropdownRight,
      })
      .then((response) => {
        setbackend({
          amount: response.data.amount,
          date: response.data.date,
          from: response.data.from,
          to: response.data.to[0],
          converted: response.data.converted[0],
        });
      })
      .catch((error) => {
        console.log("error");
      });
  }

  useEffect(() => {
    axios.get(`https://api.frankfurter.app/latest`).then((res) => {
      setRates([res.data.base, ...Object.keys(res.data.rates)]);
    });
  }, []);

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
            <DropdownL
              rates={rates}
              onchangeCurrency={(e) => {
                setDropdownLeft(e.target.value);
              }}
            />
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

        <div class="all_result">
          <div class="result_container">
            <div class="amount">
              <p>{backend.amount}</p>
            </div>
            <div class="from">
              <p>{backend.from}</p>
            </div>
            <i class="bi bi-arrow-left-right icon"></i>
            <div class="convarted">
              <p>{backend.converted}</p>
            </div>
            <div class="to">
              <p>{backend.to}</p>
            </div>
          </div>
          <p class="date_containe">{backend.date}</p>
        </div>
      </div>
      <div>
      <Calculator/>
      </div>
    </div>
  );
}

export default Currency;
