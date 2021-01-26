import React from 'react';
import { useSelector } from 'react-redux';
import { getContactData } from '../../reducks/contact/selectors';
import { InputTextField, InputLabelField, FormBottom } from './index';

const ContactConfirm = ({ handleNext }) => {
  const selector = useSelector((state) => state);
  const contactData = getContactData(selector);

  const submitForm = () => {
    handleNext();
  };

  return (
    <>
      <dl className="contact__wrap">
        <InputLabelField label={'name'} text={'お名前'} />
        <div className="contact__formwrap">
          <InputTextField
            id={'name'}
            fullWidth={true}
            placeholder={'姓'}
            multiline={false}
            required={true}
            rows={1}
            value={contactData.familyName}
            type={'text'}
            disabled={true}
          />
          <InputTextField
            fullWidth={true}
            placeholder={'名'}
            multiline={false}
            required={true}
            rows={1}
            value={contactData.firstName}
            type={'text'}
            disabled={true}
          />
        </div>

        <InputLabelField label={'companey'} text={'会社名'} />
        <InputTextField
          id={'companey'}
          fullWidth={true}
          placeholder={'株式会社××××'}
          multiline={false}
          required={true}
          rows={1}
          value={contactData.company}
          type={'text'}
          disabled={true}
        />

        <InputLabelField label={'dept'} text={'部署名'} />
        <InputTextField
          id={'dept'}
          fullWidth={true}
          multiline={false}
          required={false}
          rows={1}
          value={contactData.dept}
          type={'text'}
          disabled={true}
        />

        <InputLabelField label={'email'} text={'メールアドレス'} />
        <InputTextField
          id={'email'}
          fullWidth={true}
          placeholder={'xxx@exsample.co.jp'}
          multiline={false}
          required={true}
          rows={1}
          value={contactData.email}
          type={'text'}
          disabled={true}
        />

        <InputLabelField label={'tell'} text={'電話番号'} />
        <InputTextField
          id={'tell'}
          fullWidth={true}
          placeholder={'000-0000-0000'}
          multiline={false}
          required={true}
          rows={1}
          value={contactData.tell}
          type={'text'}
          disabled={true}
        />

        <InputLabelField label={'detail'} text={'お問い合わせ内容'} />
        <InputTextField
          id={'require'}
          fullWidth={true}
          placeholder={'お問い合わせ内容を入力してください'}
          multiline={true}
          required={true}
          rows={10}
          value={contactData.detail}
          type={'text'}
          disabled={true}
        />
      </dl>
      <FormBottom
        label={'確認画面へ'}
        checked={contactData.checked}
        style={'contact__btnright'}
        submit={submitForm}
      />
    </>
  );
};

export default ContactConfirm;
