import React from 'react';
import './InputField.css';

const InputField = ({ type, placeholder, icon, value, onChange }) => {
  return (
    <div className="input-field">
      {icon && <span className="input-icon">{icon}</span>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default InputField;