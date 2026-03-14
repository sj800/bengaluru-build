import React, { useState } from "react";
import "./UsageDropdown.css";

const options = [
  { label: "Business Use", value: "business" },
  { label: "Personal Use", value: "personal" }
];

export default function UsageDropdown({ value, onChange }) {

  const [open, setOpen] = useState(false);

  const selected = options.find(o => o.value === value);

  const handleSelect = (option) => {
    onChange(option.value);
    setOpen(false);
  };

  return (
    <div className="dropdown">

      <button
        type="button"
        className="dropdown-trigger"
        onClick={() => setOpen(!open)}
      >
        {selected.label}
        <span className="dropdown-arrow">▾</span>
      </button>

      {open && (
        <div className="dropdown-menu">
          {options.map(option => (
            <div
              key={option.value}
              className={`dropdown-item ${
                value === option.value ? "selected" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
