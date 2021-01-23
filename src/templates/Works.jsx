import React, { useEffect, useState, useCallback } from 'react';
import { Title } from '../Components/common/index';
import { CodingFront, CodingReact } from '../Components/works/index';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../reducks/works/operations';
import { getImages } from '../reducks/works/selectors';
import { TabsMenu } from '../Components/works/index';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  intro: {
    textAlign: 'center',
    marginBottom: '74px',
    fontSize: '14px',
    fontWeight: '400',
  },
});

const Works = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const images = getImages(selector);

  const menu = ['HTML/CSS/JS', 'React'];

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  return (
    <section className="works">
      <Title text={'WORKS'} />
      <p className={classes.intro}>
        制作実績です。主に個人としてのWeb制作の記録です。
        <br />
        練習用に動画講座を視聴しながら作成した作品も含んでいます。
      </p>
      <TabsMenu label={menu}>
        <CodingFront images={images} />
        <CodingReact />
      </TabsMenu>
    </section>
  );
};

export default Works;
