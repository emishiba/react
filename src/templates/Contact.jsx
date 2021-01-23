import React from 'react';
import { Title } from '../Components/common/index';
import { ContactStepper } from '../Components/contact/index';

const Contact = () => {
  return (
    <section className="contact">
      <Title text={'CONTACT'} />
      <ContactStepper />
    </section>
  );
};

export default Contact;
