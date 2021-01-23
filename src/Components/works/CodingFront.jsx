import React, { useCallback, useState, useEffect } from 'react';
import { Modal } from '../uikit/index';
import { makeStyles } from '@material-ui/styles';
import { WorksSlide, ThumbsList } from './index';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const useStyles = makeStyles({
  thumbsWrap: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },

  swiperWrap: {
    maxWidth: '920px',
    width: '80%',
  },
});

const CodingFront = ({ images }) => {
  const classes = useStyles();

  const [swiper, setSwiper] = useState(null);
  const [open, setOpen] = useState(false);
  console.log(open);

  const [params] = useState({
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: false,
    centeredSlides: true,
  });

  const handleOpen = useCallback(
    (index) => {
      swiper.slideTo(index);
      setOpen(true);
    },
    [swiper]
  );

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    var mySwiper = document.querySelector('.swiper-container').swiper;
    setSwiper(mySwiper);
  }, []);

  useEffect(() => {
    // swiper pointerEvent 無効・有効
    const getSwiperSlide = document.querySelector('.swiper-container');

    if (open) {
      getSwiperSlide.classList.add('js-swiper-container');
    } else {
      getSwiperSlide.classList.remove('js-swiper-container');
    }

    // モーダル・作品紹介スライド 表示・非表示
    const getModal = [...document.querySelectorAll('.js-modal')];
    getModal.map((item) => {
      if (open) {
        item.classList.add('js-modal_open');
      } else {
        item.classList.remove('js-modal_open');
      }
    });
  }, [open, setOpen]);

  return (
    <>
      <ul className={classes.thumbsWrap}>
        {images.map((image, index) => (
          <ThumbsList
            image={image}
            index={index}
            handleOpen={() => handleOpen(index)}
            key={image.id}
          />
        ))}
      </ul>
      <Modal open={open} />

      <Swiper {...params}>
        {images.map((value) => (
          <div key={value.id}>
            <WorksSlide
              name={value.name}
              slide={value.slide}
              url={value.url}
              lang={value.lang}
              desc={value.desc}
              handleClose={handleClose}
            />
          </div>
        ))}
      </Swiper>
    </>
  );
};

export default CodingFront;
