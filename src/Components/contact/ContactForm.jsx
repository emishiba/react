import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useDispatch } from 'react-redux';
import { formData } from '../../reducks/contact/operations';
import { InputTextField, InputLabelField, FormBottom } from './index';

import { requiredText } from '../../function/common';
import { db } from '../../firebase/index';

const useStyles = makeStyles((theme) => ({
  disable: {
    opacity: '40%',
  },

  able: {
    opacity: '1',
  },
}));

const ContactForm = ({ handleNext }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const contactRef = db.collection('contact');
  const ref = contactRef.doc();
  const id = ref.id;

  const [familyName, setFamilyName] = useState(''),
    [firstName, setFirstName] = useState(''),
    [company, setCompaney] = useState(''),
    [dept, setDept] = useState(''),
    [email, setEmail] = useState(''),
    [tell, setTell] = useState(''),
    [detail, setDetail] = useState(''),
    [checked, setChecked] = useState(false);

  const [errorFamily, setErrorFamily] = useState(''),
    [errorCompany, setErrorCompany] = useState(''),
    [errorEmail, setErrorEmail] = useState(''),
    [errorTell, setErrorTell] = useState(''),
    [errorDetail, setErrorDetail] = useState(''),
    [errorChecked, setErrorChecked] = useState(false);

  const isBlank = requiredText(
    familyName,
    firstName,
    company,
    email,
    tell,
    detail
  );

  const btnStyle = isBlank || !checked ? classes.disable : classes.able;

  const submitForm = () => {
    setErrorFamily('氏名を入力してください');
    setErrorCompany('会社名をを入力してください');
    setErrorEmail('メールアドレスを入力してください');
    setErrorTell('電話番号を入力してください');
    setErrorDetail('お問い合わせ内容を入力してください');
    setErrorChecked('チェックをしてください');

    if (!isBlank || checked) {
      dispatch(
        formData(
          id,
          familyName,
          firstName,
          company,
          dept,
          email,
          tell,
          detail,
          checked
        )
      );
      handleNext();
    }
  };

  const inputName = useCallback(
    (event) => {
      setFamilyName(event.target.value);
    },
    [setFamilyName]
  );
  const inputFirstName = useCallback(
    (event) => {
      setFirstName(event.target.value);
    },
    [setFirstName]
  );
  const inputCompaney = useCallback(
    (event) => {
      setCompaney(event.target.value);
    },
    [setCompaney]
  );
  const inputDept = useCallback(
    (event) => {
      setDept(event.target.value);
    },
    [setDept]
  );
  const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );
  const inputTell = useCallback(
    (event) => {
      setTell(event.target.value);
    },
    [setTell]
  );
  const inputDetail = useCallback(
    (event) => {
      setDetail(event.target.value);
    },
    [setDetail]
  );

  const handleChange = useCallback(
    (event) => {
      setChecked(event.target.checked);
    },
    [setChecked]
  );

  return (
    <>
      <dl className="contact__wrap">
        <InputLabelField
          label={'name'}
          text={'お名前'}
          target={familyName}
          message={errorFamily}
        />
        <div className="contact__formwrap">
          <InputTextField
            id={'name'}
            fullWidth={true}
            placeholder={'姓'}
            multiline={false}
            required={true}
            rows={1}
            value={familyName}
            type={'text'}
            onChange={inputName}
          />
          <InputTextField
            fullWidth={true}
            placeholder={'名'}
            multiline={false}
            required={true}
            rows={1}
            value={firstName}
            type={'text'}
            onChange={inputFirstName}
          />
        </div>

        <InputLabelField
          label={'companey'}
          text={'会社名'}
          target={company}
          message={errorCompany}
        />
        <InputTextField
          id={'companey'}
          fullWidth={true}
          placeholder={'株式会社××××'}
          multiline={false}
          required={true}
          rows={1}
          value={company}
          type={'text'}
          onChange={inputCompaney}
        />

        <InputLabelField label={'dept'} text={'部署名'} />
        <InputTextField
          id={'dept'}
          fullWidth={true}
          multiline={false}
          required={false}
          rows={1}
          value={dept}
          type={'text'}
          onChange={inputDept}
        />

        <InputLabelField
          label={'email'}
          text={'メールアドレス'}
          target={email}
          message={errorEmail}
        />
        <InputTextField
          id={'email'}
          fullWidth={true}
          placeholder={'xxx@exsample.co.jp'}
          multiline={false}
          required={true}
          rows={1}
          value={email}
          type={'text'}
          onChange={inputEmail}
        />

        <InputLabelField
          label={'tell'}
          text={'電話番号'}
          target={tell}
          message={errorTell}
        />
        <InputTextField
          id={'tell'}
          fullWidth={true}
          placeholder={'000-0000-0000'}
          multiline={false}
          required={true}
          rows={1}
          value={tell}
          type={'text'}
          onChange={inputTell}
        />

        <InputLabelField
          label={'detail'}
          text={'お問い合わせ内容'}
          target={detail}
          message={errorDetail}
        />
        <InputTextField
          id={'require'}
          fullWidth={true}
          placeholder={'お問い合わせ内容を入力してください'}
          multiline={true}
          required={true}
          rows={10}
          value={detail}
          type={'text'}
          onChange={inputDetail}
        />
      </dl>
      <FormBottom
        label={'確認画面へ'}
        checked={checked}
        handleChange={handleChange}
        style={'contact__btnright' + ' ' + btnStyle}
        submit={submitForm}
        target={checked}
        message={errorChecked}
      />
    </>
  );
};

export default ContactForm;
