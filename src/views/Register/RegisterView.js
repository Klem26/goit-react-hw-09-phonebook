import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';

import styles from './Register.module.css';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Sing Up</h1>

        <form
          onSubmit={this.handleSubmit}
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
              onChange={this.handleChange}
            />
          </label>

          <label className={styles.label}>
            Email address
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label className={styles.label}>
            Password
            <input
              className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
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
}
const mapDispatchToProps = {
  onRegister: authOperations.register,
};
export default connect(null, mapDispatchToProps)(RegisterView);
