import React, {useState} from 'react';
import s from './CartCard.module.scss'
import minidivan from '../../public/minidivan.png'
import Image from 'next/image';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';

const CartCard = ({item}) => {

    const toast = useToast()



    const deleteProduct = () => {
		axios.delete(`http://localhost:4080/basket/${item.id}`, item)
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

    return (
        <div className={s.cart_card_block} key={item?.id}>
            <div className={s.cart_card_block__img}>
                <Image src={item?.img} width={100} height={75} alt={item?.imgAlt}/>
            </div>
            <div className={s.cart_card_block__about}>
                <div className={s.cart_card_block__about__header}>
                    <h1>{item?.name}</h1>
                    <div className={s.cart_card_block__about__desciption__count_mobile}>{item?.count}</div>
                    <h2>{item?.price}₽</h2>
                </div>
                <div className={s.cart_card_block__about__desciption}>
                    <p>Цвет: <span>{item?.color}</span></p>
                    <div className={s.cart_card_block__about__desciption__color}></div>
                    <p className={s.cart_card_block__about__desciption__count}>Количество: <span>{item?.count}</span></p>
                </div>
            </div>
            <div className={s.cart_card_block__close_btn} onClick={() => deleteProduct()} >
                <span>x</span>
            </div>
        </div>

    );
};

export default CartCard;