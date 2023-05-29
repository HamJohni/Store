import f from './Favorites.module.scss'
import Links from "@/components/Links/Links";
import ProductCard from "@/components/ProductCard/ProductCard";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getFavorites} from "@/redux/reducers/favorites";


const Favorites = () => {

    let item = {}

    if (typeof window !== 'undefined') {
        item = JSON.parse(localStorage.getItem('user'))
    }

    let itemFavorites = {}

    if (typeof window !== 'undefined') {
        itemFavorites = JSON.parse(localStorage.getItem('user'))
    }

    const dispatch = useDispatch()

    const {favorites} = useSelector(state => state.favorites)

    useEffect(() => {
        dispatch(getFavorites(item?.id))
    },[])

    useEffect(() => {
        dispatch(getFavorites(item?.id))
    },[favorites])

    return(
        <section className={f.fav}>
            <div className="container">
                <Links/>
                <p className={f.fav__subtitle}>
                    Избранное
                </p>
                <div className={f.fav__content}>
                    {
                        favorites.map(item => (
                            <ProductCard key={item.id} product={item}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Favorites