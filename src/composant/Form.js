import React, { useState } from 'react';
import Input from './input';

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

  return (
    <div className="form-container">
      <h1>Insère ton {fields[currentPage].label}</h1>
      <Input
        type={fields[currentPage].type}
        placeholder={fields[currentPage].placeholder}
        label={fields[currentPage].label}
        value={formData[fields[currentPage].name]}
        onChange={(e) => handleInputChange(fields[currentPage].name, e.target.value)}
      />
      <div className="form-navigation">
        {currentPage > 0 && (
          <button type="button" className='NavButton' onClick={handleBack}>
            Précédent
          </button>
        )}
        {currentPage < fields.length - 1 ? (
          <button type="button" className='NavButton' onClick={handleNext}>
            Suivant
          </button>
        ) : (
          <button type="button" className='NavButton' onClick={handleSubmit}>
            Soumettre
          </button>
        )}
      </div>
    </div>
  );
};

export default Form;
