import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ContactUser.module.css';
import formOperations from '../../../redux/form/form-operations';

const ContactUser = ({ id, name, number, onDeleteContacts }) => {
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

const mapDispatchToProps = dispatch => ({
  onDeleteContacts: id => dispatch(formOperations.deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactUser);

ContactUser.propTypes = {
  onDeleteContacts: PropTypes.func.isRequired,
};
