import React, { useEffect, useState } from 'react';
import s from './Main.module.scss'
import MainSlider from '@/components/MainSlider/MainSlider';
import ProductCard from '@/components/ProductCard/ProductCard';
import { mainSliders } from '@/contants/MainSliders';
import {getUser} from "@/redux/reducers/user";
import {useDispatch, useSelector} from "react-redux";

const Main = () => {
	const {products} = useSelector(state => state.products)

	console.log(products)
	return (
		<section className='container'>
			<div className={s.main_section__block}>
				<div className={s.main_section__block__slide_block}>
					<MainSlider mainSliders={mainSliders} />
				</div>
				<div className={s.main_section__block__products}>
					<h2>Хиты продаж</h2>
					<div className={s.main_section__block__products__block}>
						{products.map((product) => {
							return (
								<ProductCard
									img={product.img}
									imgAlt={product.imgAlt}
									name={product.name}
									type={product.type}
									price={product.price}
									key={product.id}
									id={product.id} />
							)
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Main;