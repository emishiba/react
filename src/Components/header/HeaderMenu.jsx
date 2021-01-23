import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { HeaderMenuList } from './index';

const HeaderMenu = () => {
  const dispatch = useDispatch();

  const menuList = [
    { ja: 'トップ', en: 'TOP', url: '/' },
    { ja: 'プロフィール', en: 'PROFILE', url: '/profile' },
    { ja: '制作実績', en: 'WORKS', url: '/works' },
    { ja: 'お問い合わせ', en: 'CONTACT', url: '/contact' },
  ];

  const [activeIndex, setActiveIndex] = useState(-1);

  const selectedMenu = useCallback(
    (index, url) => {
      setActiveIndex(index);
      dispatch(push(url));
    },
    [dispatch]
  );

  return (
    <ul>
      {menuList.map((value, index) => (
        <HeaderMenuList
          key={index.toString()}
          onActive={() => selectedMenu(index, value.url)}
          active={activeIndex === index}
          japanese={value.ja}
          english={value.en}
        />
      ))}
    </ul>
  );
};

export default HeaderMenu;
