import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;
const getAllContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const getError = state => state.contacts.error;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export default {
  getLoading,
  getAllContacts,
  getFilter,
  getError,
  getVisibleContacts,
};
