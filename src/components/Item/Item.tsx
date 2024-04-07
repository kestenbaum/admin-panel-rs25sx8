import { FC, useState } from 'react';
import Button from '../UI/Button/Button.tsx';
import PopupDefault from '../UI/Popup/PopupDefault.tsx';
import UpdateForm from '../Forms/UpdateForm.tsx';
import styles from './Item.module.css';

const Item: FC<Item> = ({ title, link }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <PopupDefault showModal={open} setShowModal={setOpen}>
        <UpdateForm title={title} link={link} />
      </PopupDefault>
      <section className={styles.wrapper}>
        <span className={styles.title}>{title}</span>
        <div className='form-btn'>
          <Button>
            <a href={link}>Link</a>
          </Button>
          <Button onClick={() => setOpen(!open)}>Open</Button>
        </div>
      </section>
    </>
  );
};

export default Item;
