import s from './Main.module.scss'
import MainSlider from '@/components/MainSlider/MainSlider';
import ProductCard from '@/components/ProductCard/ProductCard';
import { mainSliders } from '@/contants/MainSliders';
import {useDispatch, useSelector} from "react-redux";
import {getFavorites} from "@/redux/reducers/favorites";
import {useEffect} from "react";

const Main = () => {

	const dispatch = useDispatch()

	const {products} = useSelector(state => state.products)

	const {user} = useSelector(state => state.user)

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
								<ProductCard product={product}/>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Main;