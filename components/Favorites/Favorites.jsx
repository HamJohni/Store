import f from './Favorites.module.scss'
import Links from "@/components/Links/Links";
import {products} from "@/contants/Products";
import ProductCard from "@/components/ProductCard/ProductCard";

const Favorites = () => {
    return(
        <section className={f.fav}>
            <div className="container">
                <Links/>

                <p className={f.fav__subtitle}>
                    Избранное
                </p>

                <div className={f.fav__content}>
                    <ProductCard products={products}/>
                </div>
            </div>
        </section>
    )
}

export default Favorites