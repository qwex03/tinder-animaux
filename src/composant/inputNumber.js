import React, { useState, useRef } from 'react';

function InputNumber({ length }) {
  const [values, setValues] = useState(() => Array(length).fill(''));
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const newValues = [...values];
    newValues[index] = e.target.value;
    setValues(newValues);

    if (e.target.value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !values[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div style={{ display: 'flex', gap: '5px', flexDirection: 'row' }}>
      {values.map((value, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={value}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          style={{ width: '2rem', textAlign: 'center' }}
          ref={(el) => (inputRefs.current[index] = el)}
        />
      ))}
    </div>
  );
}

export default InputNumber;
