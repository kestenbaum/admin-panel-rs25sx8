import styles from './Layout.module.css';
import Item from '../../components/Item/Item.tsx';

const Layout = () => {
  return (
    <section className={styles.wrapper}>
      <div className='container'>
        <div className={styles.items}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </section>
  );
};

export default Layout;
