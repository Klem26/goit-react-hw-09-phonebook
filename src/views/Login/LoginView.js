import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

import styles from './LoginView.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handeleChange = event => {
    const { name, value } = event.target;

    switch (name) {
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

  const resetForm = () => {
    setEmail('');
    setPassword('');

  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(authOperations.logIn({ email, password }));
      resetForm();

    },
    [dispatch, email, password]
  )

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Log in to your account</h1>

      <form
        onSubmit={handleSubmit}
        className={styles.form}
        autoComplete="off"
      >
        <label className={styles.label}>
          Email address
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={handeleChange}
          />
        </label>

        <label className={styles.label}>
          Password
          <input
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={handeleChange}
          />
        </label>

        <button type="submit" className={styles.btn}>
          Login
        </button>
      </form>
    </div>
  );
}
    // const { email, password } = this.state;
    // return (
    //   <div className={styles.container}>
    //     <h1 className={styles.title}>Log in to your account</h1>

    //     <form
    //       onSubmit={this.handleSubmit}
    //       className={styles.form}
    //       autoComplete="off"
    //     >
    //       <label className={styles.label}>
    //         Email address
    //         <input
    //           className={styles.input}
    //           type="email"
    //           name="email"
    //           value={email}
    //           onChange={this.handleChange}
    //         />
    //       </label>

    //       <label className={styles.label}>
    //         Password
    //         <input
    //           className={styles.input}
    //           type="password"
    //           name="password"
    //           value={password}
    //           onChange={this.handleChange}
    //         />
    //       </label>

    //       <button type="submit" className={styles.btn}>
    //         Login
    //       </button>
    //     </form>
    //   </div>
    // );
  // }
// }
// const mapDispatchToProps = {
//   onLogin: authOperations.logIn,
// };

// export default connect(null, mapDispatchToProps)(LoginView)
