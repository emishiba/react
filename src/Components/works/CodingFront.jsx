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

const CodingFront = ({ pfdata }) => {
  const classes = useStyles();

  const [swiper, setSwiper] = useState(null);
  const [open, setOpen] = useState(false);

  const [params] = useState({
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: false,
    centeredSlides: true,
    slidesPerView: 1,
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
    //モーダル・作品紹介スライド 表示・非表示
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
        {pfdata.map((data, index) => (
          <ThumbsList
            image={data}
            index={index}
            handleOpen={() => handleOpen(index)}
            key={data.url}
          />
        ))}
      </ul>
      <Modal open={open} />

      <Swiper {...params}>
        {pfdata.map((data) => (
          <div key={data.url}>
            <WorksSlide
              name={data.name}
              slide={data.slide}
              url={data.url}
              lang={data.lang}
              desc={data.desc}
              handleClose={handleClose}
            />
          </div>
        ))}
      </Swiper>
    </>
  );
};

export default CodingFront;
