import React from 'react';
import s from './ProductCard.module.scss'
import divan from '../../public/divan.png'
import Image from 'next/image';
import Heart from '../Heart/Heart';

const ProductCard = ({ products }) => {
	return (
		<>
			{products.map((product) => {
				return (
					<div className={s.product_card} key={product.id}>
						<div className={s.product_card__heart}>
							<Heart id={product.id}/>	
						</div>
						<div className={s.product_card__img}>
							<Image src={product.img} width={0} height={0} alt={product.imgAlt} />
						</div>
						<div className={s.product_card_description}>
							<h1>{product.name}</h1>
							<h2>{product.type}</h2>
							<p>{product.price}</p>
							<div className={s.product_card_description_cart_btn}>
								<button>Добавить в корзину</button>
							</div>
						</div>
					</div>
				)
			})}
		</>
	);
};

export default ProductCard;