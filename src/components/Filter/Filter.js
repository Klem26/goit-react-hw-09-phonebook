import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Filter.module.css';


import * as formActions from '../../redux/form/form-actions';
import contactsSelectors from '../../redux/form/contacts-selectors';


export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  const onChange = useCallback(
    e => {
      const value = e.target.value
      dispatch(formActions.filterContacts(value))
    },
    [dispatch]
  );
  return (
    <div className={styles.filter}>
      <label className={styles.labelForm}>
        Find contacts by name
        <input
          className={styles.inputFilter}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};
