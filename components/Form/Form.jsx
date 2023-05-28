import s from "@/components/Regis/Regis.module.scss";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {useToast} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import {increment} from "@/redux/reducers/user";
import {useEffect} from "react";

const Form = () => {

    const {user} = useSelector(state => state.user)

    const {pathname} = useRouter()
    const router = useRouter()
    const toast = useToast()
    const dispatch = useDispatch()

    const {register, reset, getValues, handleSubmit,
        formState: {errors}} = useForm({mode: "onBlur"})

    const submit = (data) => {
        const {confirm, ...other} = data
        pathname === '/regis' ? regUser(other) : logUser(other)
    }

    // ---------------------------------------------------
    const regUser = (data) => {
        axios.post('http://localhost:4080/register', {...data})
            .then((res) => {
                toast({
                    title: 'Акканут создан',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top-left',
                })

                localStorage.setItem('user', JSON.stringify({
                    token: res.data.accessToken,
                    ...res.data.user
                }))

                reset()
                router.push('/')
                dispatch(increment(res.data))


            }).catch((err) => {
                toast({
                    title: "Что то пошло не так...",
                    description: err.message,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: 'top-left',
                })
        })
    }

    // ----------------------------------------------------
    const logUser = (data) => {
        axios.post('http://localhost:4080/login', {...data})
            .then((res) => {
                toast({
                    title: 'Вы вошли в аккаунт',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top-left',
                })

                localStorage.setItem('user', JSON.stringify({
                    token: res.data.accessToken,
                    ...res.data.user
                }))

                dispatch(increment(res.data))
                reset()
                router.push('/')
            }).catch((err) => {
            toast({
                title: "Что то пошло не так...",
                description: err.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top-left',
            })
        })
    }

    useEffect(() => {
        if(user){
            router.push('/')
        }
    },[])

    return(
        <form noValidate onSubmit={handleSubmit(submit)}>

            {
                pathname === '/regis' ? <h1>Регистрация</h1> : <h1>Войти</h1>
            }

            <div className={s.inputs}>

                {
                    pathname === '/regis' ?
                        <>
                            <input type="text" placeholder="Имя..."
                                   {...register('name', {
                                       required: {
                                           message: "Заполните поле", value: true
                                       }
                                   })}
                            />

                            <span className={s.errors}>{errors.name && errors.name.message}</span>
                        </>

                        : ''
                }

                <input type="email" placeholder="email..."
                       {...register('email', {
                           required: {
                               message: "Email обязателен",
                               value: true
                           },
                           minLength: {
                               message: "Минимальная длина = 8",
                               value: 8
                           },
                           pattern: {
                               message: "Не провильно введен пароль",
                               value: /^[^]+@[^ ]+\.[a-z]{2,5}$/
                           }
                       })}
                />
                <span className={s.errors}>{errors.email && errors.email.message}</span>

                <input type="password" placeholder="Пароль..."
                       {...register('password', {
                           required: {
                               message: "Пароль обязателен",
                               value: true
                           },
                           pattern: {
                               value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
                               message: "Слишком легкий пароль"
                           }
                       })}
                />
                <span className={s.errors}>{errors.password && errors.password.message}</span>


                {
                    pathname === '/regis' ?
                        <>
                            <input type="password" placeholder="Подтвердите пароль..."
                                   {...register('confirm', {
                                       required: {
                                           message: "Подтвердите пароль",
                                           value: true
                                       },
                                       validate: (v) => {
                                           if (getValues('password') !== v) {
                                               return "Пароль не совпадает"
                                           }
                                       }})}
                            />
                            <span className={s.errors}>{errors.confirm && errors.confirm.message}</span>
                        </>
                    : ''
                }
            </div>

            <div className={s.btns}>

                {
                    pathname === '/regis' ?
                        <>
                            <button type="submit" className={s.auth}>
                                Зарегистрироваться
                            </button>
                            <button className={s.regis} type="button" onClick={() => router.push('/auth')}>Уже есть аккаунт</button>
                        </> :

                        <>
                            <button type="submit" className={s.auth}>
                                Войти
                            </button>
                            <button className={s.regis} type="button" onClick={() => router.push('/regis')}>Еще нет аккаунта ?</button>
                        </>
                }
            </div>
        </form>
    )
}

export default Form