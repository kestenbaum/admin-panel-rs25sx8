import Item from '../../components/Item/Item.tsx';
import styles from './Layout.module.css';
import { useQuery } from 'react-query';
import { getItems } from '../../api/request/items.ts';
import Loader from '../../components/UI/Loader/Loader.tsx';

const Layout = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['items'],
    queryFn: () => getItems().then((responce) => responce.data)
  });

  return (
    <section className={styles.wrapper}>
      <div className='container'>
        <div className={styles.items}>
          {!isLoading ? (
            data?.data.map((item) => <Item key={item._id} title={item.title} link={item.link} />)
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </section>
  );
};

export default Layout;
