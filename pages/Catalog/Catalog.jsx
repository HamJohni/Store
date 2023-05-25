import React, { useState } from "react";
import s from "./Catalog.module.scss";
import FilterOfCatalog from "@/components/FilterOfCatalog/FilterOfCatalog";
import { products } from "@/contants/Products";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Button, Dropdown, Modal } from "antd";
const Catalog = ({}) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [open, setOpen] = useState(false);
  const handlePriceChange = (value) => {
    // Фильтрация продуктов по цене
    const filtered = products.filter(
      (product) =>
        parseInt(product.price.replace(/\D/g, "")) >= value[0] &&
        parseInt(product.price.replace(/\D/g, "")) <= value[1]
    );
    setFilteredProducts(filtered);
    setPriceRange(value);
  };

  const maxPrice = products.reduce((max, product) => {
    const price = parseInt(product.price.replace(/\s|₽/g, ""));
    return price > max ? price : max;
  }, 0);

  const formatPrice = (price) => {
    return `${price.toLocaleString()}₽`;
  };

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          по убыванию цены
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          по возрастанию цены
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          по популярности
        </a>
      ),
    },
  ];

  return (
    <section className={s.Catalog}>
      <div className={s.left_side}>
        <FilterOfCatalog
          priceRange={priceRange}
          handlePriceChange={handlePriceChange}
          maxPrice={maxPrice}
          setPriceRange={setPriceRange}
          formatPrice={formatPrice}
        />
      </div>
      <div className={s.right_side}>
        <div className={s.sorting}>
          <button className={s.filter_button} onClick={() => setOpen(true)}>
            Фильтр
          </button>
          <Modal
            padding="10px"
            footer={false}
            centered
            open={open}
            closable={true}
            onCancel={() => setOpen(false)}
            width={420}
            className="modalStyle"
          >
            <FilterOfCatalog
             priceRange={priceRange}
             handlePriceChange={handlePriceChange}
             maxPrice={maxPrice}
             setPriceRange={setPriceRange}
             formatPrice={formatPrice}/>
          </Modal>
          <div className={s.right_side_of_sort}>
            <h3>Сортировать</h3>
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomRight"
            >
              <Button>
                <img src="/sortimg.png" alt="sort" />
              </Button>
            </Dropdown>
          </div>
        </div>
        <div className={s.Cards}>
          {filteredProducts.length === 0 ? (
            <div className={s.noProducts}>
              <h1>Не найдено товаров по данной цене!</h1>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                img={product.img}
                imgAlt={product.imgAlt}
                name={product.name}
                type={product.type}
                price={product.price}
                id={product.id}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
