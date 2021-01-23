import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/styles';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles({
  link: {
    cursor: 'pointer',
    fontSize: '18px',
    // paddingBottom: '5px',
  },

  notCurrent: {
    color: '#333',
    '&:hover': {
      color: '#77A6D5',
    },
  },
  current: {
    color: '#77A6D5',
    fontWeight: 'bold',
  },
});

const TextLink = ({ active, text, onActive, japanese, english }) => {
  const classes = useStyles();
  const activeColor = active ? `${classes.current}` : `${classes.notCurrent}`;

  return (
    <li className={classes.link} onClick={onActive}>
      <a className={activeColor}>
        {text}
        {japanese} <br /> {english}
      </a>
    </li>
  );
};

export default TextLink;
