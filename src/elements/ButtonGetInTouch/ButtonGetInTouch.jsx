import React from 'react';
import './ButtonGetInTouch.css';

const ButtonGetInTouch = ({ text = 'Get in touch' }) => {
  return <button className="button">{text}</button>;
};

export default ButtonGetInTouch;
