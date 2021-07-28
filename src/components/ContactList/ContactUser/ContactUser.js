import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ContactUser.module.css';
import formOperations from '../../../redux/form/form-operations';

const ContactUser = ({ id, name, number }) => {

  const dispatch = useDispatch();
  const onDeleteContacts = useCallback(() => { dispatch(formOperations.deleteContact(id)) }, [dispatch, id])
  return (
    <li className={styles.contactItem}>
      <span className={styles.name}>{name}</span>
      <span className={styles.phone}>{number}</span>
      <button
        className={styles.btnDelete}
        type="button"
        onClick={() => onDeleteContacts(id)}
      >
        Delete
      </button>
    </li>
  );
};


export default ContactUser;

ContactUser.propTypes = {
  onDeleteContacts: PropTypes.func.isRequired,
};
