import React, { useState, useEffect, useRef } from "react";
import "./UsageDropdown.css";

const options = [
  { label: "Business Brand", value: "Business" },
  { label: "Personal Brand", value: "Personal" },
  { label: "Shopify Store Setup", value: "Shopify" }
];

export default function UsageDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selected = options.find(o => o.value === value);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange(option.value);
    setOpen(false);
  };

  return (
    <div className="usage-dropdown-container" ref={dropdownRef}>
      <button
        type="button"
        className={`usage-dropdown-trigger ${open ? "is-active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span>{selected ? selected.label : "Select Use Case"}</span>
        <span className="usage-dropdown-arrow" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          ▾
        </span>
      </button>

      {open && (
        <div className="usage-dropdown-menu">
          {options.map(option => (
            <div
              key={option.value}
              className={`usage-dropdown-item ${value === option.value ? "selected" : ""}`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
              {value === option.value && <span className="check-mark">✓</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}