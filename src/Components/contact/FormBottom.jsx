import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { FooterBkg } from '../common/index';
import { ErrorMessage } from './index';

const useStyles = makeStyles({
  text: {
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
    paddingBottom: '300px',
  },

  bkg: {
    background: 'URL(../../src/assets/imgs/footer_bkg.png) no-repeat',
  },

  errorwrap: {
    display: 'block',
    textAlign: 'center',
    position: 'relative',
  },
});
const FormBottom = ({
  label,
  checked,
  handleChange,
  style,
  submit,
  target,
  message,
}) => {
  const classes = useStyles();

  return (
    <div>
      <FooterBkg />
      <div className={classes.errorwrap}>
        <ErrorMessage target={target} message={message} />
      </div>
      <label className="contact__checkbox">
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <span>
          <a href="#">プライバシーポリシー</a>に同意します
        </span>
      </label>
      <button className={style} onClick={submit}>
        {label}
      </button>
      <p className={classes.text}>
        &#8251;こちらのページでは、実際にお問い合わせを送信することはできません。
      </p>
    </div>
  );
};

export default FormBottom;
