// src/NameIdForm.js
import OptionBox from './OptionBox';
import React, { useState } from 'react';

function NameIdForm() {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [formValues, setFormValues] = useState([]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, id, selectedOption };
    setFormValues([...formValues, formData]);

    alert(`Hello, ${name}! Your ID is ${id}. Your Option choice is: ${selectedOption}`);
    
    setName('');
    setId('');
    setSelectedOption('');
  };

  return (
  <div>
      <div className="header">
        <h2>Hello My First React!</h2>
      </div>
    
    <div className="form-container">
      <h2>Enter your Name and ID</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <br />
        <label>
          ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <br />
        <OptionBox selectedOption={selectedOption} onOptionChange={handleOptionChange} />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  

  <div>
    <h2>Form Submissions</h2>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>ID</th>
        <th>Option</th>
      </tr>
    </thead>
    <tbody>
      {formValues.map((formData, index) => (
        <tr key={index}>
          <td>{formData.name}</td>
          <td>{formData.id}</td>
          <td>{formData.selectedOption}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>
  );
}

export default NameIdForm;
