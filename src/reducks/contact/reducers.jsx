import * as Actions from './actions';
import initialState from '../store/initialState';

export const ContactReducer = (state = initialState.contact, action) => {
  switch (action.type) {
    case Actions.FETCH_CONTACTDATA:
      return {
        data: {
          ...state,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};
