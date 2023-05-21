import React from 'react';
import s from './MainSlider.module.scss'
import mainImg from '../../public/main.png'

import SwiperCore, { Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay]);
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import Image from 'next/image';

const MainSlider = ({ mainSliders }) => {
	return (
		<>
			<div className={s.main_slide}>

				<Swiper
					speed={2500}
					navigation={true}
					spaceBetween={40}
					autoplay={{
						delay: 4000,
						disableOnInteraction: false,
					}}
					modules={[Navigation]}
					style={{
						"--swiper-navigation-size": "22px",
					}}
					className="mainSliderSwiper">
					{mainSliders.map((slider) => {
						return (
							<SwiperSlide key={slider.id}>
								<Image src={slider.img} width={1140} height={450} alt='main_img'  />
								<div className={s.block}>
									<h1>{slider.title}</h1>
									<p>{slider.description}</p>
									<button>СМОТРЕТЬ КАТАЛОГ</button>
								</div>
							</SwiperSlide>
						)
					})}
				</Swiper>
				{/* <div className={s.mobile_block}>
					
				</div> */}
			</div>
		</>


	);
};

export default MainSlider;