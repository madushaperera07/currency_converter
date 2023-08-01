import React from "react";

function DropdownR() {
  return (
    <div>
      <select
        class="form-select form-select-sm w-20 DropdownR"
        aria-label=".form-select-sm example"
      >
        <option selected>To</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
}

export default DropdownR;
