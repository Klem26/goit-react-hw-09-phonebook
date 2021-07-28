
import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactForm.module.css';
import formOperations from '../../redux/form/form-operations';
import contactsSelectors from '../../redux/form/contacts-selectors';


export default function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(contactsSelectors.getAllContacts);


  const handeleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.log(`Not found case ${name}`)
    }
  }

  const resetForm = () => {
    setName('');
    setNumber('');

  };

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      const arrNames = contacts.map(contact => contact.name);

      arrNames.includes(name)
        ? alert(`${name} is already in contacts`)
        : dispatch(formOperations.addContact({ name, number }));
      resetForm();


    },
    [dispatch, contacts, name, number]
  );

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.labelForm}>
          Name{' '}
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={handeleChange}
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
            onChange={handeleChange}
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
  )
}

