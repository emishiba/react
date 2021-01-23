import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  modal: {
    background: ' rgba(0, 0, 0, 0.7)',
    position: 'fixed',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    opacity: '0',
    transition: '0.3s ease-in',
    pointerEvents: 'none',
  },
});

const Modal = () => {
  const classes = useStyles();
  return <div className={`${classes.modal}` + ' ' + 'js-modal'}></div>;
};

export default Modal;
