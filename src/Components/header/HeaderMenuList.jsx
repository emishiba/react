import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  link: {
    cursor: 'pointer',
    height: '1rem',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'baseline',

    '&:not(:first-child)': {
      '&::before': {
        display: 'inline-block',
        content: '""',
        width: '1px',
        height: '14px',
        background: '#333',
        margin: '0 15px 0 15px',
      },
    },
  },

  lang: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    transition: '0.3s',
    '&:hover': {
      color: '#77A6D5',
      transform: 'translateY(-20px)',
    },
  },

  currentlang: {
    color: '#77A6D5',
    transform: 'translateY(-20px)',
    display: 'block',
    fontSize: '14px',
    transition: '0.3s',
  },
});

const HeaderMenuList = ({ active, onActive, japanese, english }) => {
  const classes = useStyles();

  const activeColor = active ? `${classes.currentlang}` : `${classes.lang}`;

  return (
    <li onClick={onActive} className={classes.link}>
      <a className={activeColor}>
        {japanese} <br />
        {english}
      </a>
    </li>
  );
};

export default HeaderMenuList;
