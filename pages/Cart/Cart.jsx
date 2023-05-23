import React from 'react';
import s from './Cart.module.scss';
import CartCard from '@/components/CartCard/CartCard';
import  { carts } from '../../contants/Cart'
import ProductCard from '@/components/ProductCard/ProductCard';
import { products } from '@/contants/Products';

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
				<div className={s.card_section__order}>
					<p>Итоговая стоимость: <span>69 960₽</span></p>
					<button className={s.card_section__order__btn}>Оформить заказ</button>
				</div>
				<div className={s.card_section__products}>
					<h1>Вам может понравиться</h1>
					<div className={s.card_section__products__block}>
						<ProductCard products={products} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cart;