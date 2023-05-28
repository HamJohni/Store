import React, { useEffect } from 'react';
import s from '../basket/Cart.module.scss';
import CartCard from '@/components/CartCard/CartCard';
import ProductCard from '@/components/ProductCard/ProductCard';
import { useDispatch, useSelector } from "react-redux";
import { getBasket } from '@/redux/reducers/basket';
import axios from "axios";
import {useToast} from "@chakra-ui/react";

const Index = () => {

    const toast = useToast()
    let item = {}

    if (typeof window !== 'undefined') {
        item = JSON.parse(localStorage.getItem('user'))
    }

    const dispatch = useDispatch()

    const { basket } = useSelector(state => state.basket)

    useEffect(() => {
        dispatch(getBasket(item.id))
    }, [])

    const { products } = useSelector(state => state.products)

    const deleteProduct = () => {
        axios.delete(`http://localhost:4080/basket/${product.id}`, item)
            .then((res) => {
                toast({
                    title: 'Продукт успешно удален',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top-left',
                })
            }).catch((err) => {
            toast({
                title: 'Продукт не удалось удалить',
                description: err.message,
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: 'top-left',
            })
        })
    }

    const totalPrice = basket.reduce((accumulator, item) => accumulator + item.price, 0);
    const totalCount = basket.reduce((accumulator, item) => accumulator + item.count, 0);

    return (
        <section className='container'>
            <div className={s.card_section}>
                <h6>Главная / Корзина</h6>
                <div className={s.card_section__header}>
                    <h2>Ваша корзина</h2>
                    <h2>{totalCount} предмета</h2>
                </div>
                <div className={s.card_section__block}>
                    {basket.length === 0 ? (
                            <h6>Нету товаров в корзине</h6>
                        ) :
                        basket?.map(item => (
                            <CartCard item={item} key={item.id} />
                        ))
                    }
                </div>
                <div className={s.card_section__order}>
                    <p>Итоговая стоимость: <span>{totalPrice}₽</span></p>
                    <button className={s.card_section__order__btn}>Оформить заказ</button>
                </div>
                <div className={s.card_section__products}>
                    <h1>Вам может понравиться</h1>
                    <div className={s.card_section__products__block}>
                        {products.map((product) => {
                            return (
                                <ProductCard product={product} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;