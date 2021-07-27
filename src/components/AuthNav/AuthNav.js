import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div className={styles.authNav}>
      <NavLink to="/register" exact className={styles.link}>
        Sign up
      </NavLink>

      <NavLink to="/login" exact className={styles.link}>
        Login
      </NavLink>
    </div>
  );
}
