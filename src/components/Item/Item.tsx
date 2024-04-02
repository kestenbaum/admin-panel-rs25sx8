import {FC} from "react";
import Button from '../UI/Button/Button.tsx';
import styles from './Item.module.css';

const Item:FC<Item> = ({title}) => {
  return (
    <section className={styles.wrapper}>
      <span className={styles.title}>{title}</span>
      <Button>Open</Button>
    </section>
  );
};

export default Item;
