import axios from 'axios';
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './form-actions';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error.message));
  }
};

const addContact =
  ({ name, number }) =>
  async dispatch => {
    const contact = {
      name,
      number,
    };
    dispatch(addContactRequest());

    try {
      const { data } = await axios.post('/contacts', contact);
      dispatch(addContactSuccess(data));
    } catch (error) {
      dispatch(addContactError(error.message));
    }
  };

const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }
};

export default {
  addContact,
  deleteContact,
  fetchContacts,
};
