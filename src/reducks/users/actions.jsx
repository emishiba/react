export const USER_INFO = 'USER_INFO';
export const userInfoAction = (userdata) => {
  return {
    type: 'USER_INFO',
    payload: {
      name: userdata.name,
      age: userdata.age,
      gender: userdata.gender,
      role: userdata.role,
    },
  };
};
