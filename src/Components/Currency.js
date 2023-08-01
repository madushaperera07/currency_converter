import React from "react";

function Currency() {
  return (
    <div class="full_container">
      <h6>Amount</h6>
      <input placeholder="Enter the amount" />
      <select
        class="form-select form-select-lg mb-3 w-25"
        aria-label=".form-select-lg example"
      >
        <option selected>From</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>

      <select
        class="form-select form-select-sm w-25"
        aria-label=".form-select-sm example"
      >
        <option selected>To</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>

      <div class="col-lg-4 col-xl-4 my-4">
        <div class="d-grid gap-2">
          <button class="btn btn-primary" type="button">
            Primary action
          </button>
        </div>
      </div>
      <p>Out Put</p>
    </div>
  );
}

export default Currency;
