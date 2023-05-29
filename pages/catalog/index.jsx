import React, { useState, useEffect } from "react";
import s from "./Catalog.module.scss";
import FilterOfCatalog from "@/components/FilterOfCatalog/FilterOfCatalog";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Button, Dropdown, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
const Catalog = ({ }) => {

  const dispatch = useDispatch()

  const {products} = useSelector(state => state.products)
  
  console.log(products);
  const [filteredProducts, setFilteredProducts] = useState([products]);
  const [priceRange, setPriceRange] = useState([0, 26990]);
  const [open, setOpen] = useState(false);
  // console.log(products);

  const handlePriceChange = (value) => {
    // Фильтрация продуктов по цене
    const filtered = products.filter(
      (product) =>
        parseInt(product.price) >= value[0] &&
        parseInt(product.price) <= value[1]
    );
    setFilteredProducts(filtered);
    setPriceRange(value);
  };

  useEffect(() => {
    // Нахождение минимальной и максимальной цены
    const prices = products.map((product) => parseInt(product.price));
    const maximPrice = Math.max(...prices);

    // Установка начального значения диапазона цен
    setPriceRange([0, maxPrice]);
    handlePriceChange([0, maxPrice]);
  }, []);

  const maxPrice = products.reduce((max, product) => {
    const price = product.price;
    return price > max ? price : max;
  }, 0);

  const formatPrice = (price) => {
    return `${price.toLocaleString()}₽`;
  };

  const items = [
    {
      key: "1",
      label: <p>по убыванию цены</p>,
    },
    {
      key: "2",
      label: <p>по возрастанию цены</p>,
    },
    {
      key: "3",
      label: <p>по популярности</p>,
    },
  ];


  console.log(filteredProducts);

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
            width={600}
            className="modalStyle"
          >
            <FilterOfCatalog
              priceRange={priceRange}
              handlePriceChange={handlePriceChange}
              maxPrice={maxPrice}
              setPriceRange={setPriceRange}
              formatPrice={formatPrice}
            />
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
                product={product}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
