import React from 'react';
import s from './Auth.module.scss'

const Auth = () => {
    return (
        <div className={s.container}>
            <div className={s.content}>
                <form>
                    <h1>
                        Авторизация
                    </h1>
                    <div className={s.inputs}>
                        <label>
                            Email
                        </label>
                        <input type="email" />
                        <label>
                            Пароль
                        </label>
                        <input type="password" />

                    </div>
                    <h2>Восстановить пароль</h2>
                    <div className={s.btns}>
                        <button className={s.auth}>Войти</button>
                        <button className={s.regis}>Зарегистрироваться</button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Auth;