import { createSelector } from 'reselect';

const WorksSelector = (state) => state.works;

export const getImages = createSelector([WorksSelector], (state) => state.list);
