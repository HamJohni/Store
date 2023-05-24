import React, { useState } from 'react';
import s from './Auth.module.scss';
import axios from 'axios';
import { useRouter } from 'next/router';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};

    // Проверка электронной почты
    if (!email) {
      formIsValid = false;
      newErrors.email = 'Введите адрес электронной почты';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formIsValid = false;
      newErrors.email = 'Введите действительный адрес электронной почты';
    }

    // Проверка пароля
    if (!password) {
      formIsValid = false;
      newErrors.password = 'Введите пароль';
    } else if (password.length < 4) {
      formIsValid = false;
      newErrors.password = 'Пароль должен содержать не менее 6 символов';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Отправка формы
      const userData = { email, password };
      axios
        .post('http://localhost:8080/login', userData)
        .then((res) => {
            console.log(res.data.token);
            localStorage.setItem("token" , res.data.token)
            router.push('/');
        })
        .catch((error) => {
          console.log(error.response.data); // Обработка ошибки от сервера
        });
    }
  };

  const router = useRouter()
  return (
    <div className={s.container}>
      <div className={s.content}>
        <form onSubmit={handleSubmit}>
          <h1>Авторизация</h1>
          <div className={s.inputs}>
            <label>Email</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <span className={s.errors}>{errors.email}</span>}

            <label>Пароль</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {errors.password && <span className={s.errors}>{errors.password}</span>}
            {}
          </div>
          <h2>Восстановить пароль?</h2>
          <div className={s.btns}>
            <button type="submit" className={s.auth} onClick={validateForm}>
              Войти
            </button>
            <button className={s.regis}>Зарегистрироваться</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
