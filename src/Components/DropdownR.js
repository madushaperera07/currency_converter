import React from "react";

function DropdownR(props) {
  const { rates, onchangeCurrency } = props;
  return (
    <div>
      <select
        class="form-select form-select-sm w-20 DropdownR"
        aria-label=".form-select-sm example"
        onChange={onchangeCurrency}
      >
        {rates.map((convert) => (
          <option key={convert} value={convert}>
            {convert}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownR;
