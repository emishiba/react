import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  // btn: {
  //   borderRadius: '40px',
  //   border: '1px solid #77A6D5',
  //   backgroundColor: '#fff',
  //   color: '#77A6D5',
  //   overflow: 'hidden',
  //   position: 'relative',
  //   zIndex: '1',
  //   margin: 'auto',
  //   display: 'block',
  //   textAlign: 'center',
  //   '&::after': {
  //     display: 'block',
  //     content: '""',
  //     width: '0%',
  //     height: '100%',
  //     borderRadius: '40px',
  //     backgroundColor: '#77A6D5',
  //     transition: '0.3s',
  //     position: 'absolute',
  //     top: '0',
  //     left: '0',
  //     zIndex: '-1',
  //   },
  //   '&:hover': {
  //     color: '#fff',
  //     '&::after': {
  //       width: '100%',
  //     },
  //   },
  // },
});

const OutlinedBtn = ({ text, onClick }) => {
  const classes = useStyles();

  return <button onClick={onClick}>{text}</button>;
};

export default OutlinedBtn;
