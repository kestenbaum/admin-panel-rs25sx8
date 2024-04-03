import { FC } from 'react';
import Button from '../UI/Button/Button.tsx';
import styles from './Item.module.css';

const Item: FC<Item> = ({ title, link }) => {
  return (
    <section className={styles.wrapper}>
      <span className={styles.title}>{title}</span>
      <div className='form-btn'>
        <Button>
          <a href={link}>Link</a>
        </Button>
        <Button>Open</Button>
      </div>
    </section>
  );
};

export default Item;
