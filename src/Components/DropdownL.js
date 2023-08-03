import React from "react";

function DropdownL(props) {
  const { rates, onchangeCurrency } = props;
  return (
    <div>
      <select
        class="form-select form-select-lg mb-3 w-20 DropdownL"
        aria-label=".form-select-lg example"
        onChange={onchangeCurrency}
      >
        <option selected>From</option>
        {rates.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default DropdownL;
