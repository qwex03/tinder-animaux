import React, { useState } from 'react';
import Input from './input';
import InputNumber from './inputNumber';

const Form = ({ fields, onSubmit, submitUrl }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
  );

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (currentPage < fields.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleBack = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(formData);
    }
    if (submitUrl) {
      fetch(submitUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
        .then(response => response.json())
        .then(data => console.log('Form submitted successfully:', data))
        .catch(err => console.error('Error submitting form:', err));
    }
  };

  const currentField = fields[currentPage];

  return (
    <div className="form-container">
      <h1>{currentField.titre}</h1>
      {currentField.type !== 'tel' && currentField.type !=="number" ? (
        <Input
          type={currentField.type}
          placeholder={currentField.placeholder}
          label={currentField.label}
          value={formData[currentField.name]}
          onChange={(e) => handleInputChange(currentField.name, e.target.value)}
        />
      ) : (
        <InputNumber
          length={currentField.length} 
          values={formData[currentField.name].split('')} 
          onChange={(newValues) => handleInputChange(currentField.name, newValues.join(''))} 
        />
      )}

      <div className="form-navigation">
        {currentPage > 0 && (
          <button type="button" className="NavButton" onClick={handleBack}>
            Précédent
          </button>
        )}
        {currentPage < fields.length - 1 ? (
          <button type="button" className="NavButton" onClick={handleNext}>
            Suivant
          </button>
        ) : (
          <button type="button" className="NavButton" onClick={handleSubmit}>
            Soumettre
          </button>
        )}
      </div>
    </div>
  );
};

export default Form;
