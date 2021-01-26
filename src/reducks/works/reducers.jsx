import * as Actions from './actions';
import initialState from '../store/initialState';

export const WorksReducer = (state = initialState.works, action) => {
  switch (action.type) {
    case Actions.FETCH_PFDATAFRONT:
      return {
        ...state,
        front: [...action.payload],
      };
    case Actions.FETCH_PFDATAREACT:
      return {
        ...state,
        react: [...action.payload],
      };
    default:
      return state;
  }
};
