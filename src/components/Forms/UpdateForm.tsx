import Button from '../UI/Button/Button.tsx';

const UpdateForm = () => {
  return (
    <form className={'form'}>
      <input placeholder={'Title'} />
      <input placeholder={'Img'} />
      <input placeholder={'Link'} />
      <input placeholder='Category' />
      <div className={'form-btn'}>
        <Button>Delete</Button>
        <Button>Update</Button>
      </div>
    </form>
  );
};

export default UpdateForm;
