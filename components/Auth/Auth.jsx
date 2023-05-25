import s from './Auth.module.scss';
import Form from "@/components/Form/Form";

const Auth = () => {

  return (
    <div className={s.container}>
      <div className={s.content}>
        <Form/>
      </div>
    </div>
  );
};

export default Auth;
