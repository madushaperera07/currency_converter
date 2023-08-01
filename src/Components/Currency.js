import React from "react";
import DropdownL from "./DropdownL";
import DropdownR from "./DropdownR";

import image from "../img/images.png";

function Currency() {
  return (
    <div class="full_container">
      <div class="currency_container">
        <div class="image_container">
          <img src={image} />
          <h3>CURRENCY CONVERTER</h3>
        </div>
        <form>
          <div class="input_container">
            <input placeholder="Enter the amount" />
          </div>

          <div class="dropdown_container">
            <DropdownL />
            <DropdownR />
          </div>

          <div class="button_container">
            <input type="submit" class="btn btn-success px-3 button" />
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
