import React from 'react';
import s from './ProductCard.module.scss'
import Image from 'next/image';
import Heart from '../Heart/Heart';

const ProductCard = ({ img, imgAlt, name, type, price, id }) => {
	return (
		<>
			<div className={s.product_card} key={id}>
				<div className={s.product_card__heart}>
					<Heart id={id} />
				</div>
				<div className={s.product_card__img}>
					<Image src={img} width={0} height={0} alt={imgAlt} />
				</div>
				<div className={s.product_card_description}>
					<h1>{name}</h1>
					<h2>{type}</h2>
					<p>{price}</p>
					<div className={s.product_card_description_cart_btn}>
						<button>Добавить в корзину</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductCard;