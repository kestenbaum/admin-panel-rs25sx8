import styles from './Header.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.wrapper}>
          <span className={styles.logo}>Admin-Panel</span>
          <span className={styles.logo}>
            <GiHamburgerMenu />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
