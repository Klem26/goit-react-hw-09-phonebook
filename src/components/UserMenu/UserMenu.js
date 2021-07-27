import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from './UserMenu.module.css';

import defaultAvatar from './default-avatar.jpg';

const UserMenu = ({ avatar, name, onLogout }) => {
  return (
    <div className={styles.container}>
      <img src={avatar} alt="" width="32" className={styles.avatar} />
      <span className={styles.name}>Welcome, {name}</span>
      <button type="button" className={styles.button} onClick={onLogout}>
        Log aut
      </button>
    </div>
  );
};
const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
