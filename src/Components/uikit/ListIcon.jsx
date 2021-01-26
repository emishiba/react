import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RoundIcon from '@material-ui/icons/Brightness1Rounded';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  primary: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '3px',
  },

  secondary: {
    marginBottom: '23px',
  },

  font: {
    fontWeight: 'bold',
    fontSize: '1rem',
    marginLeft: '5px',
  },

  icon: {
    color: ' #77a6d5',
    fontSize: '0.9rem',
  },
});

const ListIcon = ({ primary, secondary }) => {
  const classes = useStyles();

  return (
    <>
      <dt className={classes.primary}>
        <RoundIcon className={classes.icon} />
        <p className={classes.font}>{primary}</p>
      </dt>
      <dd className={classes.secondary}>{secondary}</dd>
    </>
  );
};

export default ListIcon;
