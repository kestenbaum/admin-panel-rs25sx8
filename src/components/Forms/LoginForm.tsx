import Button from '../UI/Button/Button.tsx';

const LoginForm = () => {
  return (
    <form className={'form'}>
      <input placeholder={'Login'} />
      <input placeholder={'Password'} />
      <div className={'form-btn'}>
        <Button>Login</Button>
      </div>
    </form>
  );
};

export default LoginForm;
