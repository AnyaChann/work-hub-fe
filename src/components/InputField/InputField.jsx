import React from 'react';
import './InputField.css';

const InputField = ({ label, type, placeholder, icon }) => {
  return (
    <div className="input-field">
      {icon && <span className="input-icon">{icon}</span>}
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputField;