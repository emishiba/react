export const FETCH_CONTACTDATA = 'FETCH_CONTACTDATA';
export const fetchContactData = (data) => {
  return {
    type: 'FETCH_CONTACTDATA',
    payload: {
      id: data.id,
      familyName: data.familyName,
      firstName: data.firstName,
      company: data.company,
      dept: data.dept,
      email: data.email,
      tell: data.tell,
      detail: data.detail,
      checked: data.checked,
    },
  };
};
