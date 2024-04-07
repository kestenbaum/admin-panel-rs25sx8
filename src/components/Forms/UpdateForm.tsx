import {FC} from "react";
import Button from '../UI/Button/Button.tsx';

const UpdateForm:FC<Item> = ({title, link}) => {

  return (
    <form className={'form'}>
      <input placeholder={title} />
      <input placeholder={"img"} />
      <input placeholder={link} />
      <div className={'form-btn'}>
        <Button>Delete</Button>
        <Button>Update</Button>
      </div>
    </form>
  );
};

export default UpdateForm;
