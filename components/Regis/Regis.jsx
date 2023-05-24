import React, { useState } from 'react';
import s from './Regis.module.scss'
import axios from 'axios';
import { useRouter } from 'next/router';

const Regis = () => {
    const [regis, setRegis] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formIsValid = true;
        const newErrors = {};

        // Проверка имени пользователя
        if (!regis.username) {
            formIsValid = false;
            newErrors.username = 'Введите имя пользователя';
        }

        // Проверка электронной почты
        if (!regis.email) {
            formIsValid = false;
            newErrors.email = 'Введите адрес электронной почты';
        } else if (!/\S+@\S+\.\S+/.test(regis.email)) {
            formIsValid = false;
            newErrors.email = 'Введите действительный адрес электронной почты';
        }

        // Проверка пароля
        if (!regis.password) {
            formIsValid = false;
            newErrors.password = 'Введите пароль';
        } else if (regis.password.length <= 4) {
            formIsValid = false;
            newErrors.password = 'Пароль должен содержать не менее 6 символов';
        }

        setErrors(newErrors);
        return formIsValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            axios
                .post('http://localhost:8080/register', regis)
                .then((res) => {
                    console.log(res);
                    router.push('/auth');
                })
                .catch((err) => {
                    console.error(err);
                    setErrors({ general: 'Произошла ошибка при регистрации' });
                });
        }
    };
    const router = useRouter();
    return (
        <div className={s.container}>
            <div className={s.content}>
                <form onSubmit={handleSubmit}>
                    <h1>Регистрация</h1>
                    <div className={s.inputs}>
                        <label>Username</label>
                        <input
                            type="text"
                            value={regis.username}
                            onChange={(e) => setRegis({ ...regis, username: e.target.value })}
                        />
                        {errors.username && <span className={s.errors}>{errors.username}</span>}
                        <label>Email</label>
                        <input
                            type="text"
                            value={regis.email}
                            onChange={(e) => setRegis({ ...regis, email: e.target.value })}
                        />
                        {errors.email && <span className={s.errors}>{errors.email}</span>}
                        <label>Пароль</label>
                        <input
                            type="password"
                            
                            value={regis.password}
                            onChange={(e) => setRegis({ ...regis, password: e.target.value })}
                        />
                        {errors.password && <span className={s.errors}>{errors.password}</span>}
                    </div>
                    {errors.general && <span className={s.errors}>{errors.general}</span>}
                    <div className={s.btns}>
                        <button type="submit" className={s.auth}>
                            Зарегистрироваться
                        </button>
                        <button className={s.regis}>Уже есть аккаунт</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Regis;
