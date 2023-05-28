import i from './Info.module.scss'

import {FiHeart} from "react-icons/fi";
import {BsChevronDown} from "react-icons/bs";

import {Rating, Star} from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import {useEffect, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import {useRouter} from "next/router";
import axios from "axios";


const Info =  () => {

    const {query} = useRouter()

    const [product, setProduct] = useState({})

    useEffect(() => {
        axios(`http://localhost:4080/products?id=${query.id}`)
            .then((res) => {
                setProduct(res.data[0])
            }).catch((err) => alert(err.message))
    },[])

    useEffect(() => {
        axios(`http://localhost:4080/products?id=${query.id}`)
            .then((res) => {
                setProduct(res.data[0])
            }).catch((err) => alert(err.message))
    },[query])


    const [rating] = useState(4)
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#000000',
        inactiveFillColor: '#D1D1D1'
    }

    return(
        <div className={i.info}>
            <div className={i.info__left}>
                <div className={i.info__left_main}>
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "black",
                            "--swiper-pagination-color": "black",
                        }}
                        spaceBetween={10}
                        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="TopSlider"
                    >
                        <SwiperSlide>
                            <img src={product?.img} alt={product?.imgAlt}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://eurostyle.kg/files/products/.%20%D0%92%D0%A0-47%20%282%29.960x580.JPG?b223d1417cfe8186a4dbc05de006e8c6" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="https://eurostyle.kg/files/products/.%20%D0%92%D0%A0-28%20%281%29.960x580.JPG?7ba59970f56464c23a83f0799d119af8" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="https://eurostyle.kg/files/products/.%20%D0%92%D0%A0-28%20%282%29.960x580.JPG?cdde3c215998822a3237866872803f08" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="https://eurostyle.kg/files/products/.%20%D0%92%D0%A0-28%20%283%29.960x580.JPG?a55287821b8939a49a5fcf09122229fb" />
                        </SwiperSlide>

                    </Swiper>
                </div>
                <div className={i.info__left_bottom}>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        loop
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        breakpoints={{
                            570:{
                                slidesPerView: 4,
                            },
                            509:{
                                slidesPerView: 3,
                            },
                            321:{
                                slidesPerView: 3,
                            },
                            320: {
                                slidesPerView: 2,
                            },
                            200: {
                                slidesPerView: 1,
                            }
                        }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="BottomSwiper"
                    >
                        <SwiperSlide>
                            <img src={product?.img} alt={product?.imgAlt}/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="https://eurostyle.kg/files/products/.%20%D0%92%D0%A0-47%20%282%29.960x580.JPG?b223d1417cfe8186a4dbc05de006e8c6" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="https://eurostyle.kg/files/products/.%20%D0%92%D0%A0-28%20%281%29.960x580.JPG?7ba59970f56464c23a83f0799d119af8" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="https://eurostyle.kg/files/products/.%20%D0%92%D0%A0-28%20%282%29.960x580.JPG?cdde3c215998822a3237866872803f08" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="https://eurostyle.kg/files/products/.%20%D0%92%D0%A0-28%20%283%29.960x580.JPG?a55287821b8939a49a5fcf09122229fb" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className={i.info__right}>
                <Rating style={{maxWidth: 100}} value={rating} itemStyles={myStyles}/>

                <h2 className={i.info__right_title}>{product?.name}</h2>

                <p className={i.info__right_subtitle}>{product?.type}</p>

                <div className={i.info__right_mid}>
                    <p className={i.info__right_mid_price}>{product?.price}₽</p>

                    <button className={i.info__right_mid_btn}>Купить</button>

                    <p className={i.info__right_mid_favourite}>
                        <FiHeart size={20}/>
                        <span>
                           Добавить в желаемое  
                        </span>
                    </p>
                </div>

                <div className={i.info__right_categories}>
                    <div className={i.info__right_categories_box}>
                        <span className={i.info__right_categories_subtitle}>
                            Цвет
                        </span>

                        <div className={i.info__right_categories_content} style={{ background: '#FFC107'}}>
                        </div>
                    </div>

                    <div className={i.info__right_categories_box}>
                        <span className={i.info__right_categories_subtitle}>
                            Размер (Д × Ш × В)
                        </span>

                        <div className={i.info__right_categories_desc}>
                            218 СМ × 95 СМ × 90 СМ
                            <BsChevronDown size={15} className={i.info__right_categories_content_arrow}/>
                        </div>
                    </div>

                </div>

                <p className={i.info__right_desc}>
                    Описание
                </p>

                <p className={i.info__right_desc_text}>
                    {product?.desc}
                </p>
            </div>
        </div>
    )
}

export default Info