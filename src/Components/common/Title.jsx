import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  h2: {
    color: '#77A6D5',
    fontSize: '55px',
    fontFamily: "'Philosopher', sans-serif",
    textAlign: 'center',
    paddingTop: '70px',
  },
});

const Title = ({ text }) => {
  const classes = useStyles();

  return <h2 className={classes.h2}>{text}</h2>;
};

export default Title;
