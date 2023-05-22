import React, { useState } from 'react';
import s from './CartCard.module.scss'
import minidivan from '../../public/minidivan.png'
import Image from 'next/image';

const CartCard = ({ carts }) => {
	const [cartItems, setCartItems] = useState(carts);

	const removeCartItem = (id) => {
	  const updatedCartItems = cartItems.filter((cart) => cart.id !== id);
	  setCartItems(updatedCartItems);
	};
	
	return (
		<>
			{
				cartItems.map((cart => {
					return (
						<div  className={`${s.cart_card_block} ${s.slideIn}`} id={`cart_${cart.id}`} key={cart.id}>
							<div className={s.cart_card_block__img}>
								<Image src={cart.img} width={100} height={75} alt={cart.imgAlt} />
							</div>
							<div className={s.cart_card_block__about}>
								<div className={s.cart_card_block__about__header}>
									<h1>{cart.title}</h1>
									<h2>{cart.price}</h2>
								</div>
								<div className={s.cart_card_block__about__desciption}>
									<p>Цвет: <span>{cart.color}</span></p>
									<div className={s.cart_card_block__about__desciption__color}></div>
									<p>Количество: <span>{cart.count}</span></p>
									<p>Размер(Ш×Д×В): <span>{cart.size}</span></p>
								</div>
							</div>
							<div onClick={() => removeCartItem(cart.id)}  className={s.cart_card_block__close_btn}>
								<span>x</span>
							</div>
						</div>
					)
				}))
			}
		</>
	);
};

export default CartCard;