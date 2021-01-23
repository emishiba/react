import React, { useCallback, useState } from 'react';
import Stepper from '@material-ui/core/Stepper';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { ContactForm, ContactConfirm, ContactComplete } from './index';

const useStyles = makeStyles((theme) => ({
  container: {
    background: 'transparent',
    marginBottom: '50px',
  },
  inner: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '780px',
    width: '100%',
    margin: 'auto',
  },
  list: {
    display: 'flex',
    alignItems: 'center',

    '&:not(:last-child)': {
      '&::after': {
        display: 'inline-block',
        content: '""',
        width: '58px',
        height: '6px',
        background: '#77a6d5',
        margin: '0 15px',
      },
    },
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% / 3)',

      '&:not(:last-child)': {
        '&::after': {
          width: 'calc(50% - 20px)',
          margin: '0 10px',
        },
      },
    },
  },
  active: {
    color: '#fff',
    background: '#77a6d5',
    borderRadius: '50%',
    width: '88px',
    height: '88px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    [theme.breakpoints.down('sm')]: {
      width: '50%',
    },
  },

  label: {
    color: '#ABBDCF',
    background: '#E5EBF1',
    borderRadius: '50%',
    width: '88px',
    height: '88px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    [theme.breakpoints.down('sm')]: {
      width: '50%',
    },
  },
}));

const ContactStepper = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const steps = ['入力', '確認', '完了'];
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }, [[setActiveStep]]);

  const handleComplete = () => {
    dispatch(push('/'));
  };

  return (
    <div>
      <div className={classes.container}>
        <ul className={classes.inner}>
          {steps.map((label, index) => (
            <li key={label} className={classes.list}>
              <p
                className={
                  activeStep === index
                    ? `${classes.active}`
                    : `${classes.label}`
                }
              >
                {label}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {activeStep === 0 && <ContactForm handleNext={handleNext} />}
        {activeStep === 1 && <ContactConfirm handleNext={handleNext} />}
        {activeStep === 2 && (
          <ContactComplete handleComplete={handleComplete} />
        )}
      </div>
    </div>
  );
};

export default ContactStepper;
