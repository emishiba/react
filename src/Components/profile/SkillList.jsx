import React from 'react';
import { Title } from '../common/index';
import { SkillListItem } from './index';
import { makeStyles } from '@material-ui/styles';
import { TextListDl } from '../uikit/index';

const useStyles = makeStyles({
  container: {
    paddingBottom: '50px',
  },
});

const SkillList = () => {
  const classes = useStyles();

  return (
    <section className="skill">
      <Title text={'SKILL'} />
      <dl>
        <div className="skill__wrap">
          <TextListDl secondary={'HTML/CSS'} primary={<SkillListItem />} />
          <dd>
            HTML/CSSは問題なく使うことができます。レスポンシブサイトの作成経験もあります。scssを使っています。
          </dd>
        </div>
        <div className="skill__wrap">
          <TextListDl secondary={'Javascript'} primary={<SkillListItem />} />
          <dd>
            JS/jQuery/ES6でコードを書くことができます。プラグインを使ったスライダーの実装経験があります。
          </dd>
        </div>
        <div className="skill__wrap">
          <TextListDl secondary={'React'} primary={<SkillListItem />} />
          <dd>
            React
            Hooks/Router/Reduxを使ってPFを作成しています。チャットやショッピングサイトのWebアプリを作成したことがあります。Firebaseを使用しています。
          </dd>
        </div>
        <div className="skill__wrap">
          <TextListDl secondary={'Photoshop'} primary={<SkillListItem />} />
          <dd>
            psdデータから画像の切り出し/サイズ変更等することができます。基本的な操作は問題ありません。
          </dd>
        </div>
      </dl>
    </section>
  );
};

export default SkillList;
