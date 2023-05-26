import React from 'react';
import s from './Cart.module.scss';
import CartCard from '@/components/CartCard/CartCard';
import ProductCard from '@/components/ProductCard/ProductCard';
import {useSelector} from "react-redux";


const Index = () => {


	const {basket} = useSelector(state => state.basket)

	const {products} = useSelector(state => state.products)

	return (
		<section className='container'>
			<div className={s.card_section}>
				<h6>Главная / Корзина</h6>
				<div className={s.card_section__header}>
					<h2>Ваша корзина</h2>
					<h2>4 предмета</h2>
				</div>
				<div className={s.card_section__block}>
					{
						basket?.map(item => (
							<CartCard item={item} key={item.id} />
						))
					}
				</div>
				<div className={s.card_section__order}>
					<p>Итоговая стоимость: <span>69 960₽</span></p>
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