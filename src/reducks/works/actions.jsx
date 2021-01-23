export const FETCH_IMAGES = 'FETCH_IMAGES';
export const fetchImagesAction = (images) => {
  return {
    type: 'FETCH_IMAGES',
    payload: images,
  };
};
