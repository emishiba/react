import HTMLReactParser from 'html-react-parser';

// 改行をbrタグに変換
export const returnCodeToBr = (text) => {
  if (text === '') {
    return text;
  } else {
    const str = HTMLReactParser(text.replace(/\\n/g, '<br/>'));
    return str;
  }
};

// 未入力データのチェック
export const requiredText = (...args) => {
  let validator = false;
  for (let i = 0; i < args.length; i = (i + 1) | 0) {
    if (args[i] === '') {
      args[i] === args[0];
      validator = true;
    }
  }
  return validator;
};

// emailの入力形式チェック
export const requiredEmail = (mail) => {
  const regex = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regex.test(mail);
};
