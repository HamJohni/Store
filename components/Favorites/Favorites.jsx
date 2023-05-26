import f from './Favorites.module.scss'
import Links from "@/components/Links/Links";
import {products} from "@/contants/Products";
import ProductCard from "@/components/ProductCard/ProductCard";
import {useDispatch, useSelector} from "react-redux";
import {getFavorites} from "@/redux/reducers/favorites";
import {useEffect} from "react";

const Favorites = () => {

    const {favorites} = useSelector(state => state.favorites)

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
                            <ProductCard product={item}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Favorites