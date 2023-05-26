import React, {useState} from 'react';
import s from './CartCard.module.scss'
import minidivan from '../../public/minidivan.png'
import Image from 'next/image';

const CartCard = ({item}) => {

    return (
        <div className={s.cart_card_block} key={item?.id}>
            <div className={s.cart_card_block__img}>
                <Image src={item?.img} width={100} height={75} alt={item?.imgAlt}/>
            </div>
            <div className={s.cart_card_block__about}>
                <div className={s.cart_card_block__about__header}>
                    <h1>{item?.title}</h1>
                    <div className={s.cart_card_block__about__desciption__count_mobile}>{item?.count}</div>
                    <h2>{item?.price}</h2>
                </div>
                <div className={s.cart_card_block__about__desciption}>
                    <p>Цвет: <span>{item?.color}</span></p>
                    <div className={s.cart_card_block__about__desciption__color}></div>
                    <p className={s.cart_card_block__about__desciption__count}>Количество: <span>{item?.count}</span></p>
                    <p>Размер(Ш×Д×В): <span>{item?.size}</span></p>
                </div>
            </div>
            <div    >
                <span>x</span>
            </div>
        </div>

    );
};

export default CartCard;