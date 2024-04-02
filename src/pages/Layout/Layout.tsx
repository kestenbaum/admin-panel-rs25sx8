import Item from '../../components/Item/Item.tsx';
import CreateForm from "../../components/Forms/CreateForm.tsx";
import UpdateForm from "../../components/Forms/UpdateForm.tsx";
import styles from './Layout.module.css';
import {useQuery} from "react-query";
import {getItems} from "../../api/request/items.ts";

const Layout = () => {
  const {data, isLoading} = useQuery({
   queryKey: ["items"],
   queryFn: () => getItems().then(responce => responce.data)
  })

  return (
    <section className={styles.wrapper}>
      <div className='container'>
        <div className={styles.items}>
          <CreateForm/>
          <UpdateForm/>
          {!isLoading
              ?
              data?.data.map(item => <Item key={item._id} title={item.title}/>)
            :
            <div>Loader</div>
          }
        </div>
      </div>
    </section>
  );
};

export default Layout;
