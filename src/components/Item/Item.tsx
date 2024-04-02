import styles from './Item.module.css';
import Button from '../UI/Button/Button.tsx';

const Item = () => {
  return (
    <section className={styles.wrapper}>
      <span className={styles.title}>Title</span>
      <Button>Open</Button>
    </section>
  );
};

export default Item;
