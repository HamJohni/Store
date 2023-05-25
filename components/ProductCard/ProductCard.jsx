import React, {useEffect, useState} from 'react';
import s from './ProductCard.module.scss'
import Image from 'next/image';
import Heart from '../Heart/Heart';
import axios from "axios";
import {useSelector} from "react-redux";
import {AiOutlineHeart} from "react-icons/ai";
import {useToast} from "@chakra-ui/react";

const ProductCard = ({product}) => {
	const toast = useToast()
	const {user} = useSelector(state => state.user)


	const favoritesItem = () => {

		const item = {
			userId: user?.id,
			...product
		}

		axios.post(`http://localhost:4080/favorites`, item)
			.then((res) => {
				toast({
					title: 'Продукт добавлен',
					status: 'success',
					duration: 5000,
					isClosable: true,
					position: 'top-left',
				})
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

	return (
		<>
			<div className={s.product_card} key={product.id}>
				<div className={s.product_card__heart}>
					<AiOutlineHeart size={25}/>
				</div>
				<div className={s.product_card__img}>
					<Image src={product.img} width={200} height={150} alt={product.imgAlt} />
				</div>
				<div className={s.product_card_description}>
					<h1>{product.name}</h1>
					<h2>{product.type}</h2>
					<p>{product.price}</p>
					<div className={s.product_card_description_cart_btn}>
						<button onClick={() => favoritesItem() }>Добавить в корзину</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductCard;