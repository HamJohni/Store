import React, { useState } from "react";
import s from "./Catalog.module.scss";
import FilterOfCatalog from "@/components/FilterOfCatalog/FilterOfCatalog";
import { products } from "@/contants/Products";
import ProductCard from "@/components/ProductCard/ProductCard";

const Catalog = () => {

  const [filteredProducts, setFilteredProducts] = useState([]);

  const handlePriceChange = (value) => {
    // Фильтрация продуктов по цене
    const filtered = products.filter(
      (product) =>
        parseInt(product.price.replace(/\D/g, '')) >= value[0] &&
        parseInt(product.price.replace(/\D/g, '')) <= value[1]
    );
    setFilteredProducts(filtered);
  };

  

  return (
    <section className={s.Catalog}>
      <div className={s.left_side}>
        <FilterOfCatalog onChange={handlePriceChange}/>
      </div>
      <div className={s.right_side}>
        <div className={s.sorting}>dfsfsd[pkf]</div>
        <div className={s.Cards}>
          {products.map((product) => {
            return (
              <ProductCard
                img={product.img}
                imgAlt={product.imgAlt}
                name={product.name}
                type={product.type}
                price={product.price}
                id={product.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
