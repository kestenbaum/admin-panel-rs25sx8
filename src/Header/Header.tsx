import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
          <div className={styles.wrapper}>
              <span className={styles.logo}>Logo</span>
              <span className={styles.logo}>Menu</span>
          </div>
      </div>
    </header>
  );
};

export default Header;
