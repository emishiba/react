import { Firebasetimestamp, db } from '../../firebase/index';
import { fetchImagesAction } from './actions';

const worksRef = db.collection('works');

export const fetchImages = () => {
  return async (dispatch) => {
    worksRef.get().then((snapshots) => {
      const list = [];
      snapshots.forEach((snapshot) => {
        const image = snapshot.data();
        list.push(image);
      });
      dispatch(fetchImagesAction(list));
    });
  };
};
