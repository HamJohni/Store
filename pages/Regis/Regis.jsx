import React from 'react';
import s from './Regis.module.scss'

const regis = () => {
    return (
        <div className={s.container}>
            <div className={s.content}>
                <form>
                    <h1>
                        Регистрация                    </h1>
                    <div className={s.inputs}>
                        <label>
                            Username
                        </label>
                        <input type="text" />
                        <label>
                            Email
                        </label>
                        <input type="email" />
                        <label>
                            Пароль
                        </label>
                        <input type="password" />

                    </div>
                    <div className={s.btns}>
                        <button className={s.auth}>Зарегистрироваться</button>
                        <button className={s.regis}>Уже есть аккаунт</button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default regis;