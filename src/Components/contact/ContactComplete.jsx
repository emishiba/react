import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '30px 60px',
    },
    [theme.breakpoints.up('md')]: {
      width: '784px',
      padding: '50px 80px ',
    },
  },

  largetext: {
    fontSize: '25px',
    fontWeight: 'bold',
    marginBottom: '46px',
  },

  space: {
    marginBottom: '10px',
  },
}));

const ContactComplete = ({ handleComplete }) => {
  const classes = useStyles();

  return (
    <>
      <div className={'contact__wrap' + ' ' + classes.container}>
        <p className={classes.largetext}>送信が完了いたしました。</p>
        <p className={classes.space}>
          お問い合わせいただきありがとうございました。
        </p>
        <p className={classes.space}>
          確認のため、お客様に自動返信メールをお送りしております。
          <br />
          もしメールが到着しなかった場合は、入力していただいたメールアドレスが
          <br />
          間違っている可能性があります。
        </p>
        <p className={classes.space}>
          お問い合わせいただいた内容につきましては、近日中にお返事させていただきます。
        </p>
      </div>
      <button className="contact__btnleft" onClick={handleComplete}>
        TOPページへ戻る
      </button>
    </>
  );
};

export default ContactComplete;
