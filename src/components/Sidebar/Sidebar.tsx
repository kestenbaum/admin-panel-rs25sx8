import { FC, useState } from 'react';
import Button from '../UI/Button/Button.tsx';
import PopupDefault from '../UI/Popup/PopupDefault.tsx';
import styles from './Sidebar.module.css';
import CreateForm from '../Forms/CreateForm.tsx';

interface SidebarProps {
  active: boolean;
  setActive: (active: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({ active, setActive }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <PopupDefault showModal={open} setShowModal={setOpen}>
        <CreateForm />
      </PopupDefault>
      <div
        className={!active ? styles.sidebar : styles.sidebarActive}
        onClick={() => setActive(false)}
      >
        <Button
          onClick={() => {
            setOpen(!open);
            setActive(false);
          }}
        >
          Create
        </Button>
        <Button onClick={() => setActive(false)}>LogOut</Button>
      </div>
    </>
  );
};

export default Sidebar;
