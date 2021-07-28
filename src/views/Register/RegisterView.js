import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

import styles from './Register.module.css';
export default function RegisterView() {

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.log(`This ${name} is not available`)
    }
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      dispatch(authOperations.register({ name, email, password }))
      setName('');
      setEmail('');
      setPassword('');

    },
    [dispatch, name, email, password]
  );


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sing Up</h1>

      <form
        onSubmit={handleSubmit}
        className={styles.form}
        autoComplete="off"
      >
        <label className={styles.label}>
          Name
          <input
            type="text"
            className={styles.input}
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className={styles.label}>
          Email address
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={styles.label}>
          Password
          <input
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className={styles.btn} type="submit">
          Sing Up{' '}
          <span role="img" aria-label="Иконка приветствия">
            🏄‍♀️
          </span>
        </button>
      </form>
    </div>
  );
}
