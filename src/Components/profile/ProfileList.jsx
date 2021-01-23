import React from 'react';
import { Title } from '../common/index';
import { TextListDl } from '../uikit/index';

const ProfileList = () => {
  return (
    <section className="profile">
      <Title text={'PROFILE'} />
      <dl>
        <TextListDl primary={'E.S'} secondary={'Name'} />
        <TextListDl primary={'27歳/女性'} secondary={'Age/Gender'} />
      </dl>
    </section>
  );
};

export default ProfileList;
