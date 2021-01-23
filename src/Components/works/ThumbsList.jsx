import React from 'react';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  thumbs: {
    margin: '0 20px 20px',
    width: 'calc(33.3% - 40px)',
    height: 'auto',
    position: 'relative',
    cursor: 'pointer',

    '&:after': {
      display: 'block',
      content: '""',
      paddingTop: '57%',
    },

    [theme.breakpoints.down('sm')]: {
      margin: '0 10px 10px',
      width: 'calc(50% - 20px)',
    },
  },

  thumbsImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

const ThumbsList = ({ image, index, handleOpen }) => {
  const classes = useStyles();

  return (
    <>
      <li
        className={classes.thumbs}
        key={image.id}
        onClick={() => handleOpen()}
      >
        <img className={classes.thumbsImage} src={image.path} alt={image.id} />
      </li>
    </>
  );
};

export default ThumbsList;
