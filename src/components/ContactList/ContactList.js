import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { connect } from 'react-redux';
import formOperations from '../../redux/form/form-operations';
import ContactUser from './ContactUser';
import Loader from '../Loader/';
import contactsSelectors from '../../redux/form/contacts-selectors';

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    const { contacts, onDeleteContacts, isLoadingContacts, error } = this.props;
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
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
  isLoadingContacts: contactsSelectors.getLoading(state),
  error: contactsSelectors.getError(state),
});

const mapDispatchToProps = dispatch => {
  return {
    fetchContacts: () => dispatch(formOperations.fetchContacts()),
    onDeleteContacts: id => dispatch(formOperations.deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
