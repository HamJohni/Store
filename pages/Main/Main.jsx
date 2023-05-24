import React, { useEffect, useState } from 'react';
import s from './Main.module.scss'
import MainSlider from '@/components/MainSlider/MainSlider';
import ProductCard from '@/components/ProductCard/ProductCard';
// import { products } from '@/contants/Products';
import { mainSliders } from '@/contants/MainSliders';
import axios from 'axios';

const Main = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = async () => {
		try {
			const response = await axios.get('http://localhost:8080/products');
			setProducts(response.data);
		} catch (error) {
			console.error('Ошибка при получении продуктов:', error);
		}
	};


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