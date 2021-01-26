import { db } from '../../firebase/index';
import { fetchPfdataFrontAction, fetchPfdataReactAction } from './actions';

export const fetchPfdataFront = () => {
  return async (dispatch) => {
    const pfRef = db.collection('pfdataFront');
    const snapshots = await pfRef.get();

    const front = [];
    snapshots.forEach((snapshot) => {
      const data = snapshot.data();
      front.push(data);
    });
    dispatch(fetchPfdataFrontAction(front));
  };
};
export const fetchPfdataReact = () => {
  return async (dispatch) => {
    const pfRef = db.collection('pfdataReact');
    const snapshots = await pfRef.get();

    const react = [];
    snapshots.forEach((snapshot) => {
      const data = snapshot.data();
      react.push(data);
    });
    dispatch(fetchPfdataReactAction(react));
  };
};
