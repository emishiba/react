import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { TextLink } from '../uikit/index';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    textTransform: 'none',
    '&:hover': {
      color: ' #77a6d5',
      borderBottom: '1px solid #000',
    },
  },
});

const MenuList = (props) => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);

  const selectedMenu = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  return (
    <>
      <List>
        {props.label.map((value, index) => (
          <TextLink
            underline={'none'}
            onActive={() => selectedMenu(index)}
            active={activeIndex === index}
            text={value}
            key={index.toString()}
          />
        ))}
      </List>
    </>
  );
};

export default MenuList;
