import React from 'react';
import s from './Cart.module.scss';
import CartCard from '@/components/CartCard/CartCard';
import  { carts } from '../../contants/Cart'

const Cart = () => {
	return (
		<section className='container'>
			<div className={s.card_section}>
				<h6>Главная / Корзина</h6>
				<div className={s.card_section__header}>
					<h2>Ваша корзина</h2>
					<h2>4 предмета</h2>
				</div>
				<div className={s.card_section__block}>
					<CartCard carts={carts}/>
				</div>
			</div>
		</section>
	);
};

export default Cart;