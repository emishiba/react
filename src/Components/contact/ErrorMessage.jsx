import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  error: {
    color: '#ff0000',
    fontSize: '12px',
  },
});

const ErrorMessage = ({ target, message }) => {
  const classes = useStyles();

  return (
    <>{target == false && <span className={classes.error}>{message} </span>}</>
  );
};

export default ErrorMessage;
