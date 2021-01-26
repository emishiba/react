import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { ListIcon } from '../uikit/index';
import { ImagesGallery } from './index';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'swiper/css/swiper.css';
import { returnCodeToBr } from '../../function/common';

const useStyles = makeStyles({
  container: {
    background: '#fff',
    borderRadius: '10px',
    maxWidth: '920px',
    width: '90%',
    margin: 'auto',
    position: 'relative',
    top: '30px',
    opacity: '0',
  },

  title: {
    color: '#fff',
    backgroundColor: ' #77a6d5',
    borderRadius: '10px 10px 0 0',
    textAlign: 'center',
    fontSize: '26px',
    fontWeight: 700,
    lineHeight: '1',
    padding: '20px 0',

    '& span': {
      fontSize: '14px',
      fontWeight: 400,
    },
  },

  list: {
    padding: '30px',
  },

  closebtn: {
    display: 'block',
    width: '70px',
    height: '70px',
    background: '#fff',
    borderRadius: '50%',
    position: 'absolute',
    top: '-30px',
    right: '-35px',

    '&::before, &::after': {
      display: 'inline-block',
      content: '""',
      border: '1px solid #77a6d5',
      width: '37.5px',
    },

    '&:before': {
      transform: 'rotate(45deg) translate(14px, -7px)',
    },
    '&:after': {
      transform: 'rotate(-45deg)  translate(17px, 3px)',
    },
  },
});

const WorksSlide = ({ name, slide, url, lang, desc, handleClose }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.container}` + ' ' + 'js-modal'}>
      <p className={classes.title}>
        {name[0]}
        <br />
        <span>{name[1]}</span>
      </p>
      <ImagesGallery slide={slide} />
      <dl className={classes.list}>
        <ListIcon primary={'URL'} secondary={url} />
        <ListIcon primary={'使用言語'} secondary={lang} />
        <ListIcon primary={'詳細'} secondary={returnCodeToBr(desc)} />
      </dl>
      <button
        className={classes.closebtn}
        onClick={() => handleClose()}
      ></button>
    </div>
  );
};

export default WorksSlide;
