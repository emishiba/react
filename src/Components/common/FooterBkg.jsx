import React from 'react';
import bkgbottom from '../../assets/imgs/footer_bkg.png';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  bkg: {
    background: `url(${bkgbottom}) no-repeat right center`,
    backgroundSize: 'cover',
    width: '100%',
    height: '600px',
    position: 'absolute',
    bottom: '0',
    left: '0',
  },
});

const FooterBkg = () => {
  const classes = useStyles();
  return <div className={classes.bkg}></div>;
};

export default FooterBkg;
