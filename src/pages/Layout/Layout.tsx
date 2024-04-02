import styles from './Layout.module.css';
import Item from '../../components/Item/Item.tsx';
import CreateForm from "../../components/Forms/CreateForm.tsx";
import UpdateForm from "../../components/Forms/UpdateForm.tsx";

const Layout = () => {
  return (
    <section className={styles.wrapper}>
      <div className='container'>
        <div className={styles.items}>
          <CreateForm/>
          <UpdateForm/>
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
