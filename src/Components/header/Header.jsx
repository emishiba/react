import React, { useEffect } from 'react';
import { HeaderMenu } from './index';
import Logo from '../../assets/imgs/logo.png';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fadeIn = (getclass, addclass) => {
      const getElement = document.querySelector(getclass);
      getElement.classList.add(addclass);
    };

    setTimeout(fadeIn('.js-logo', 'js-fadeIn_logo'), 1000);
    setTimeout(fadeIn('.js-nav', 'js-fadeIn_nav'), 1000);
  }, []);

  return (
    <header className="headerarea">
      <div className="headerarea__inner">
        <h1 className="js-logo" onClick={() => dispatch(push('/'))}>
          <img src={Logo} alt="portfolio" />
        </h1>
        <nav className="js-nav">
          <HeaderMenu />
        </nav>
      </div>
    </header>
  );
};

export default Header;
