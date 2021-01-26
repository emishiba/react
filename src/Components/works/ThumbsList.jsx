import React from 'react';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  thumbs: {
    margin: '0 20px 20px',
    width: 'calc(33.3% - 40px)',
    height: 'auto',
    cursor: 'pointer',
    transition: '0.3s',

    '& img': {
      filter: 'blur(5px)',
      transition: '0.3s',
    },

    '&:hover': {
      color: '#77A6D5',

      '& img': {
        filter: 'blur(0px)',
      },
    },

    [theme.breakpoints.down('sm')]: {
      margin: '0 10px 10px',
      width: 'calc(50% - 20px)',
    },
  },

  imagewrap: {
    width: '100%',
    height: 'auto',
    position: 'relative',

    '&:after': {
      display: 'block',
      content: '""',
      paddingTop: '57%',
      marginBottom: '20px',
    },

    '& img': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },

  thumbsname: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    fontSize: '16px',
    fontWeight: 700,

    '& span': {
      fontSize: '14px',
      fontWeight: 400,
    },
  },
}));

const ThumbsList = ({ image, handleOpen }) => {
  const classes = useStyles();

  return (
    <>
      <li
        className={classes.thumbs}
        key={image.url}
        onClick={() => handleOpen()}
      >
        <div className={classes.imagewrap}>
          <img src={image.slide[0]} alt={image.name[0]} />
        </div>
        <p className={classes.thumbsname}>
          {image.name[0]}
          <span>{image.name[1]}</span>
        </p>
      </li>
    </>
  );
};

export default ThumbsList;
