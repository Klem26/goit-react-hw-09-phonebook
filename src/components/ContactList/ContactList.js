import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import formOperations from '../../redux/form/form-operations';
import ContactUser from './ContactUser';
import Loader from '../Loader/';
import contactsSelectors from '../../redux/form/contacts-selectors';

export default function ContactList(id) {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);
  const error = useSelector(contactsSelectors.getError);
  const contacts = useSelector(contactsSelectors.getVisibleContacts)

  useEffect(() => { dispatch(formOperations.fetchContacts()) }, [dispatch])
  const onDeleteContacts = useCallback(() => { dispatch(formOperations.deleteContact(id)) }, [dispatch, id])

  return (
    <div>
      {isLoadingContacts && <Loader />}
      {error && <p>There is no contact on your list</p>}
      <ul className={styles.list}>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactUser
              key={id}
              name={name}
              number={number}
              onDeleteContacts={onDeleteContacts}
              id={id}
            />
          );
        })}
      </ul>
    </div>
  );

};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
};




