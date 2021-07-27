import React, { Component } from 'react';
import styles from './ContactForm.module.css';
import { connect } from 'react-redux';
import formOperations from '../../redux/form/form-operations';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handelChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handelSubmit = event => {
    event.preventDefault();

    const { name } = this.state;
    const arrNames = this.props.contacts.map(contact => contact.name);

    arrNames.includes(name)
      ? alert(`${name} is already in contacts`)
      : this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form className={styles.form} onSubmit={this.handelSubmit}>
          <label className={styles.labelForm}>
            Name{' '}
            <input
              className={styles.input}
              type="text"
              name="name"
              value={name}
              onChange={this.handelChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label className={styles.labelForm}>
            Number{' '}
            <input
              className={styles.input}
              type="tel"
              name="number"
              value={number}
              onChange={this.handelChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <button className={styles.btnAddContact} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: value => dispatch(formOperations.addContact(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
