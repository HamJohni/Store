import s from './Main.module.scss'
import MainSlider from '@/components/MainSlider/MainSlider';
import ProductCard from '@/components/ProductCard/ProductCard';
import { mainSliders } from '@/contants/MainSliders';
import {useSelector} from "react-redux";

const Main = () => {
	const {products} = useSelector(state => state.products)

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