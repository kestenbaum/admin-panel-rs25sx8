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
  const getDataItems = data?.data.map((item) => (
    <Item key={item._id} title={item.title} link={item.link} />
  ));
  return (
    <section className={styles.wrapper}>
      <div className='container'>
        <div className={styles.items}>{!isLoading ? getDataItems : <Loader />}</div>
      </div>
    </section>
  );
};

export default Layout;
