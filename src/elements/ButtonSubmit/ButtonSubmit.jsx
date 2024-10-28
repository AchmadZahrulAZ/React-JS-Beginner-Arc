import React from 'react';
import './ButtonSubmit.css';

const Button = ({ text = 'Submit' }) => {
  return <button className="button2">{text}</button>;
};

export default Button;
