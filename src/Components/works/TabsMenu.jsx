import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextLink } from '../uikit/index';
import { TabPanel } from './index';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginBottom: '74px',
  },
}));

const TabsMenu = (props) => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);

  const selectedMenu = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  return (
    <>
      <ul className={`${classes.container}` + ' ' + 'works__menu'}>
        {props.label.map((value, index) => (
          <TextLink
            onActive={() => selectedMenu(index)}
            active={activeIndex === index}
            text={value}
            key={index.toString()}
          />
        ))}
      </ul>

      {props.children.map((child, index) => (
        <TabPanel
          key={index.toString()}
          activeIndex={activeIndex}
          index={index}
          child={child}
        />
      ))}
    </>
  );
};

export default TabsMenu;
