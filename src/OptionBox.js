import React, { useState } from 'react';

export function OptionBox({ selectedOption, onOptionChange }) {
  const [localSelectedOption, setLocalSelectedOption] = useState(selectedOption || 'Option 1');

  const handleOptionChange = (event) => {
    setLocalSelectedOption(event.target.value);
    onOptionChange(event); // Pass the event to the parent component
  };

  return (
    <div className="option-box-container">
      <label>Select an option:</label>
      <select value={localSelectedOption} onChange={handleOptionChange}>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
      <p>Selected Option: {localSelectedOption}</p>
    </div>
  );
}

export default OptionBox;

