import { db } from '../../firebase/index';
const contactRef = db.collection('contact');
import { fetchContactData } from './actions';

export const formData = (
  id,
  familyName,
  firstName,
  company,
  dept,
  email,
  tell,
  detail,
  checked
) => {
  return async (dispatch) => {
    const data = {
      id: id,
      familyName: familyName,
      firstName: firstName,
      company: company,
      dept: dept,
      email: email,
      tell: tell,
      detail: detail,
      checked: checked,
    };

    return contactRef
      .doc(id)
      .set(data)
      .then(() => {
        dispatch(fetchContactData(data));
      });
  };
};
