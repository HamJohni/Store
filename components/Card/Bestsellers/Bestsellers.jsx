import b from './Bestsellers.module.scss'
import {products} from "@/contants/Products";
import ProductCard from "@/components/ProductCard/ProductCard";
import React from "react";

const Bestsellers = () => {
    return(
        <section className={b.best}>
            <p className={b.best__subtitle}>
                Хиты продаж
            </p>

            <div className={b.best__list}>
                <ProductCard products={products}/>
            </div>
        </section>
    )
}

export default Bestsellers