import React from "react";

function DropdownL() {
  return (
    <div>
      <select
        class="form-select form-select-lg mb-3 w-20 DropdownL"
        aria-label=".form-select-lg example"
      >
        <option selected>From</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
}

export default DropdownL;
