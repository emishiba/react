import React, { useState, useEffect, useCallback, useRef } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { WorksSlide } from './index';
import { Controller } from 'swiper/js/swiper.esm';
import { Navigation } from 'swiper/js/swiper.esm';

const ImageSwiper = ({ data, handleClose }) => {
  const [params] = useState({
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: false,
  });

  return (
    <div>
      <Swiper {...params}>
        {data.map((value, index) => (
          <div key={value.id}>
            <WorksSlide
              name={value.name}
              slide={value.slide}
              url={value.url}
              lang={value.lang}
              desc={value.desc}
              handleClose={handleClose}
              index={index}
            />
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSwiper;
