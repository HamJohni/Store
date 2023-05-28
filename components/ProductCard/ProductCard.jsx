import s from './ProductCard.module.scss'
import Image from 'next/image';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getFavorites } from "@/redux/reducers/favorites";

const ProductCard = ({ product }) => {

	const router = useRouter()

	const toast = useToast()

	const [check, setCheck] = useState(false)

	const { favorites } = useSelector(state => state.favorites)

	const { user } = useSelector(state => state.user)

	useEffect(() => {
		favorites.map(item => {
			if (item.id === product.id) {
				setCheck(true)
			}
		})
	}, [])

	const checkItem = () => {
		if (check) {
			setCheck(false)
			axios.delete(`http://localhost:4080/favorites/${product.id}`)
				.then((res) => {
					toast({
						title: 'Продукт успешно удален',
						status: 'success',
						duration: 5000,
						isClosable: true,
						position: 'top-left',
					})
				}).catch((err) => {
					toast({
						title: 'Продукт не удалось удалить',
						description: err.message,
						status: 'success',
						duration: 5000,
						isClosable: true,
						position: 'top-left',
					})

				})
		} else {
			setCheck((prev) => !prev)
			const item = {
				userId: user?.id,
				...product
			}

			axios.post(`http://localhost:4080/favorites`, item)
				.then((res) => {
					toast({
						title: 'Продукт добавлен в корзину',
						status: 'success',
						duration: 5000,
						isClosable: true,
						position: 'top-left',
					})
				}).catch((err) => {
					toast({
						title: "Продукт есть в корзине",
						status: 'error',
						duration: 5000,
						isClosable: true,
						position: 'top-left',
					})
				})
		}
	}

	const addCard =  async () => {
		const mob = {
			userId: user?.id,
			...product
		}
		axios.post('http://localhost:4080/basket' , mob)
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
				title: "Вы уже добавили в избранное",
				status: 'error',
				duration: 5000,
				isClosable: true,
				position: 'top-left',
			})
		})
	}

	return (
		<>
			<div className={s.product_card} key={product.id} >
				<div className={s.product_card__heart} onClick={() => checkItem()}>
					{
						check ? <AiFillHeart fill="red" size={25} /> : <AiOutlineHeart fill="red" size={25} />
					}
				</div>
				<div className={s.product_card__img}>
					<Image onClick={() => router.push(`/card/${product.id}`)} src={product.img} width={200} height={150} alt={product.imgAlt} />
				</div>
				<div className={s.product_card_description}>
					<h1>{product.name}</h1>
					<h2>{product.type}</h2>
					<p>{product.price}</p>
					<div className={s.product_card_description_cart_btn}>
						<button onClick={() => addCard()}>Добавить в корзину</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductCard;