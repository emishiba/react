import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  panel: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

const TabPanel = ({ activeIndex, index, child }) => {
  const classes = useStyles();

  return (
    <>
      {activeIndex === index && (
        <div className={classes.panel} hidden={activeIndex !== index}>
          {child}
        </div>
      )}
    </>
  );
};

export default TabPanel;
