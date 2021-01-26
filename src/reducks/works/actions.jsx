export const FETCH_PFDATAFRONT = 'FETCH_PFDATAFRONT';
export const fetchPfdataFrontAction = (data) => {
  return {
    type: 'FETCH_PFDATAFRONT',
    payload: data,
  };
};

export const FETCH_PFDATAREACT = 'FETCH_PFDATAREACT';
export const fetchPfdataReactAction = (data) => {
  return {
    type: 'FETCH_PFDATAREACT',
    payload: data,
  };
};
