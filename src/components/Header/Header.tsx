import styles from './Header.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import {useState} from "react";
import Sidebar from "../Sidebar/Sidebar.tsx";


const Header = () => {
  const [isActive, setActive] = useState<boolean>(false)

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.wrapper}>
          <span className={styles.logo}>Admin-Panel</span>
          <Sidebar active={isActive} setActive={setActive}/>
            <div
                className={styles.menu}
                onClick={() => setActive(!isActive)}
            >
              <GiHamburgerMenu />
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
