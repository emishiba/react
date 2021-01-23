import React, { useEffect } from 'react';
import Logo from '../assets/imgs/logo.png';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

const Top = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fadeIn = (getclass, addclass) => {
      const getElement = document.querySelector(getclass);
      getElement.classList.add(addclass);
    };

    setTimeout(fadeIn('main', 'js-fadeIn_bkg'), 1000);
    setTimeout(fadeIn('.js-title', 'js-fadeIn_title'), 1000);
    setTimeout(fadeIn('.js-btn', 'js-fadeIn_btn'), 1000);
  }, []);

  return (
    <section className="top">
      <h2 className="js-title">
        <img src={Logo} alt="portfolio" />
        <span>Frontend&ensp;Developer</span>
      </h2>
      <div className="js-btn">
        <button
          className="top__btnright"
          onClick={() => dispatch(push('/works'))}
        >
          WORKS
        </button>
      </div>
    </section>
  );
};

export default Top;
