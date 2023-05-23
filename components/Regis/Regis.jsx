import React, { useState } from 'react';
import s from './Regis.module.scss'

const Regis = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formIsValid = true;
        const newErrors = {};

        // Проверка имени пользователя
        if (!username) {
            formIsValid = false;
            newErrors.username = 'Введите имя пользователя';
        }

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
        } else if (password.length < 6) {
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
            console.log('Форма отправлена');
        }
    };



    return (
        <div className={s.container}>
            <div className={s.content}>
                <form onSubmit={handleSubmit} >
                    <h1>
                        Регистрация
                    </h1>
                    <div className={s.inputs}>
                        <label>
                            Username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        {errors.username && <span className={s.errors}>{errors.username}</span>}
                        <label>
                            Email
                        </label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <span className={s.errors}>{errors.email}</span>}
                        <label>
                            Пароль
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <span className={s.errors}>{errors.password}</span>}

                    </div>
                    <div className={s.btns}>
                        <button
                            type="submit"
                            className={s.auth}
                            onClick={validateForm}
                        >Зарегистрироваться</button>
                        <button className={s.regis}>Уже есть аккаунт</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Regis;