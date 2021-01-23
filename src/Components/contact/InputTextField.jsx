import React from 'react';
import { TextInput } from '../uikit/index';

const InputTextField = ({
  id,
  fullWidth,
  placeholder,
  multiline,
  required,
  rows,
  value,
  type,
  onChange,
  disabled,
}) => {
  return (
    <dd>
      <TextInput
        id={id}
        fullWidth={fullWidth}
        placeholder={placeholder}
        multiline={multiline}
        required={required}
        rows={rows}
        value={value}
        type={type}
        onChange={onChange}
        disabled={disabled}
      />
    </dd>
  );
};

export default InputTextField;
