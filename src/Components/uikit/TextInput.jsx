import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextInput = (props) => {
  return (
    <TextField
      id={props.id}
      variant="outlined"
      fullWidth={props.fullWidth}
      label={props.label}
      placeholder={props.placeholder}
      margin="dense"
      multiline={props.multiline}
      required={props.required}
      rows={props.rows}
      value={props.value}
      type={props.type}
      disabled={props.disabled}
      onChange={props.onChange}
    />
  );
};

export default TextInput;
