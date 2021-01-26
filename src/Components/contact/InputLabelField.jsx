import React from 'react';
import { ErrorMessage } from './index';

const InputLabelField = ({ label, text, target, message }) => {
  return (
    <dt>
      <label htmlFor={label}>{text}</label>
      <ErrorMessage target={target} message={message} />
    </dt>
  );
};

export default InputLabelField;
