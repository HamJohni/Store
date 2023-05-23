import React from "react";
import s from "./Catalog.module.scss";
import FilterOfCatalog from "@/components/FilterOfCatalog/FilterOfCatalog";
import { products } from "@/contants/Products";
import ProductCard from "@/components/ProductCard/ProductCard";

const Catalog = () => {
  return (
    <section className={s.Catalog}>
      <div className={s.left_side}>
        <FilterOfCatalog />
      </div>
      <div className={s.right_side}>
        <div className={s.sorting}>dfsfsd[pkf]</div>
        <div className={s.Cards}>
          <ProductCard products={products} />
        </div>
      </div>
    </section>
  );
};

export default Catalog;
