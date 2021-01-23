import { createSelector } from 'reselect';

const ContactSelector = (state) => state.contact;

export const getContactData = createSelector(
  [ContactSelector],
  (state) => state.data
);
