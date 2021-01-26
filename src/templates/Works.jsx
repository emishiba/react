import React, { useEffect } from 'react';
import { Title } from '../Components/common/index';
import { CodingFront, CodingReact } from '../Components/works/index';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPfdataFront,
  fetchPfdataReact,
} from '../reducks/works/operations';
import { getPfdataFront, getPfdataReact } from '../reducks/works/selectors';
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
  const pfdataFront = getPfdataFront(selector);
  const pfdataReact = getPfdataReact(selector);

  const menu = ['HTML/CSS/JS', 'React'];

  useEffect(() => {
    dispatch(fetchPfdataFront());
    dispatch(fetchPfdataReact());
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
        <CodingFront pfdata={pfdataFront} />
        <CodingReact pfdata={pfdataReact} />
      </TabsMenu>
    </section>
  );
};

export default Works;
