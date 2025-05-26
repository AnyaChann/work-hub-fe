import React from 'react';
import './Button.css';

const Button = ({ label, onClick, type = 'button', variant = 'primary' }) => {
  return (
    <button className={`button ${variant}`} type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;