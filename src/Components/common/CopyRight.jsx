import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  copy: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '30px',
  },
});

const CopyRight = () => {
  const classes = useStyles();

  return (
    <small className={classes.copy}>
      &copy;E.S&ensp;All&ensp;rights&ensp;reserved
    </small>
  );
};

export default CopyRight;
