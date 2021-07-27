import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import styles from './Navigation.module.css';

const Navigation = ({ isAuthenticated }) => (
  <nav className={styles.nav}>
    <NavLink to="/" className={styles.link}>
      Ноme
    </NavLink>

    {isAuthenticated && (
      <NavLink to="/contacts" className={styles.link}>
        Contacts
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
