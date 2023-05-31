import React, { useState, useEffect } from "react";
import s from "./Catalog.module.scss";
import FilterOfCatalog from "@/components/FilterOfCatalog/FilterOfCatalog";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Button, Dropdown, Modal, Select } from "antd";
// import { products } from "@/contants/Products";
import { useDispatch, useSelector } from "react-redux";

import {useDebounce} from "@/hooks/debounce";
import {getProducts} from "@/redux/reducers/products";
const Catalog = ({ }) => {

const Catalog = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const [name,setName]= useState('')

  console.log(products);
  const [filteredProducts, setFilteredProducts] = useState([products]);
  const [priceRange, setPriceRange] = useState([0, 300990]);
  const [open, setOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("default");

  const handlePriceChange = (value) => {
    const filtered = products.filter(
      (product) =>
        parseInt(product.price) >= value[0] &&
        parseInt(product.price) <= value[1]
    );

    // Сортировка отфильтрованных продуктов
    const sortedProducts = sortProducts(filtered, sortOrder);
    setFilteredProducts(sortedProducts);
    setPriceRange(value);
  };


  const sortProducts = (products, sortOrder) => {
    const sorted = [...products];

    if (sortOrder === "asc") {
      sorted.sort((a, b) => parseInt(a.price) - parseInt(b.price));
    } else if (sortOrder === "desc") {
      sorted.sort((a, b) => parseInt(b.price) - parseInt(a.price));
    }
    return sorted;
  };


  const handleSortChange = (value) => {
    if (value === "all") {
      setFilteredProducts(products); // Show all products
    } else if (value === "desc") {
      const sortedProducts = sortProducts(filteredProducts, "desc");
      setFilteredProducts(sortedProducts); // Sort by descending price
    } else if (value === "asc") {
      const sortedProducts = sortProducts(filteredProducts, "asc");
      setFilteredProducts(sortedProducts); // Sort by ascending price
    }
  };

  useEffect(() => {
    const prices = products.map((product) => parseInt(product.price));
    const maxPrice = Math.max(...prices);

    setPriceRange([0, maxPrice]);
    handlePriceChange([0, maxPrice]);
  }, [products]);

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

  // const handleSortChange = (value) => {
  //   setSortOrder(value);

  //   // Сортировка отфильтрованных продуктов при изменении значения сортировки
  //   const sortedProducts = sortProducts(filteredProducts, value);
  //   setFilteredProducts(sortedProducts);
  // };


  return (
    <section className={s.Catalog}>
      <div className={s.left_side}>
        <FilterOfCatalog
            setName={setName}
            name={name}
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
            <Select
              placeholder="Сортировать"
              menu={{
                items,
              }}
              defaultValue='all'
              options={[
                {
                  value: 'all',
                  label: 'показать все'
                },
                {
                  value: "desc",
                  label: "по убыванию цены",
                },
                {
                  value: "asc",
                  label: "по возрастанию цены",
                },
              ]}
              placement="bottomRight"
              onChange={handleSortChange}
            >
              <Button>
                <img src="/sortimg.png" alt="sort" />
              </Button>
            </Select>
          </div>
        </div>
        <div className={s.Cards}>
          {filteredProducts.length === 0 ? (
            <div className={s.noProducts}>
              <h1>Не найдено товаров по данной цене!</h1>
            </div>
          ) : (
            filteredProducts.map((product) => (

              <ProductCard product={product} key={product.id} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}};

export default Catalog;
