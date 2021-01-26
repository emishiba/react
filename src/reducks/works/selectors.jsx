import { createSelector } from 'reselect';

const WorksSelector = (state) => state.works;

export const getPfdataFront = createSelector(
  [WorksSelector],
  (state) => state.front
);
export const getPfdataReact = createSelector(
  [WorksSelector],
  (state) => state.react
);
