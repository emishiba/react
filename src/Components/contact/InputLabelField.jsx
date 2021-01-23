import React from 'react';

const InputLabelField = ({ label, text }) => {
  return (
    <dt>
      <label htmlFor={label}>{text}</label>
    </dt>
  );
};

export default InputLabelField;
