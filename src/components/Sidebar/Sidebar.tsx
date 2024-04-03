import { FC } from 'react';
import Button from '../UI/Button/Button.tsx';
import styles from './Sidebar.module.css';

interface SidebarProps {
  active: boolean;
  setActive: (active: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({ active, setActive }) => {
  return (
    <div
      className={!active ? styles.sidebar : styles.sidebarActive}
      onClick={() => setActive(false)}
    >
      <Button onClick={() => setActive(false)}>Create</Button>
      <Button onClick={() => setActive(false)}>LogOut</Button>
    </div>
  );
};

export default Sidebar;
