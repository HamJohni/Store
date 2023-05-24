import React, { useState } from "react";
import s from "./Catalog.module.scss";
import FilterOfCatalog from "@/components/FilterOfCatalog/FilterOfCatalog";
import { products } from "@/contants/Products";
import ProductCard from "@/components/ProductCard/ProductCard";

const Catalog = ({}) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 10000]);
 
  const handlePriceChange = (value) => {
    // Фильтрация продуктов по цене
    const filtered = products.filter(
      (product) =>
        parseInt(product.price.replace(/\D/g, "")) >= value[0] &&
        parseInt(product.price.replace(/\D/g, "")) <= value[1]
    );
    setFilteredProducts(filtered);
    setPriceRange(value)
  };

  const maxPrice = products.reduce((max, product) => {
    const price = parseInt(product.price.replace(/\s|₽/g, ""));
    return price > max ? price : max;
  }, 0);

  const formatPrice = (price) => {
    return `${price.toLocaleString()}₽`;
  };


  return (
    <section className={s.Catalog}>
      <div className={s.left_side}>
        <FilterOfCatalog
          priceRange={priceRange}
          handlePriceChange={handlePriceChange}
          maxPrice={maxPrice}
          formatPrice={formatPrice}
          
        />
      </div>
      <div className={s.right_side}>
        <div className={s.sorting}>dfsfsd[pkf]</div>
        <div className={s.Cards}>
          {(filteredProducts.length > 0 ? filteredProducts : products).map(
            (product) => (
              <ProductCard
                key={product.id}
                img={product.img}
                imgAlt={product.imgAlt}
                name={product.name}
                type={product.type}
                price={product.price}
                id={product.id}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
