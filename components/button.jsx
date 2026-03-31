import React from 'react';
import Styles from "../Styles/Button.module.css";


const Button = ({ 
  variant = 'primary', 
  className = '', 
  children, 
  ...props 
}) => {
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-50'
  };

  return (
    <button
      className={`btn ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
