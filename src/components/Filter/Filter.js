import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { connect } from 'react-redux';

import * as formActions from '../../redux/form/form-actions';
import contactsSelectors from '../../redux/form/contacts-selectors';

const Filter = ({ value, onChange }) => {
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

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(formActions.filterContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
