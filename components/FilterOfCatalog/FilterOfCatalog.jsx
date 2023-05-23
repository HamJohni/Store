import React, { useState } from "react";
import { Slider, Checkbox } from "antd";
import s from "./FilterOfCatalog.module.scss";
import { Button, Dropdown, Space, Tooltip, message } from "antd";
import Selection from "../Selection/Selection";
import Checkboxes from "../Checkbox/Checkboxes";
const FilterOfCatalog = () => {
  const handleButtonClick = (e) => {
    message.info("Click on left button.");
    console.log("click left button", e);
  };
  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const items = [
    {
      label: "1st menu item",
      key: "1",
    },
    {
      label: "2nd menu item",
      key: "2",
    },
    {
      label: "3rd menu item",
      key: "3",
      danger: true,
    },
    {
      label: "4rd menu item",
      key: "4",
      danger: true,
      disabled: true,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const onChange = (e) => {
    // console.log(`checked = ${e.target.checked}`);
    
  };

  const [priceRange, setPriceRange] = useState([0, 100000]);

  const handlePriceChange = (value) => {
    setPriceRange(value);
    onChange(value);
  };

  const formatPrice = (price) => {
    return `${price.toLocaleString()}₽`;
    
  };

  return (
    <div className={s.FilterOfCatalog}>
      <div className={s.Select}>
        <h3>Раздел</h3>
        <Selection>Гостинные</Selection>
        <Selection>Мягкая мебель</Selection>
        <Selection>Диваны</Selection>
      </div>

      <div className={s.price}>
        <h3>Цена</h3>
        <Slider
          style={{ position: "relative" }}
          range={{ draggableTrack: false }}
          defaultValue={priceRange}
          onChange={handlePriceChange}
        />
        <div>
          <div>Начальное число: {formatPrice(priceRange[0])}</div>
          <div>Максимальное число: {formatPrice(priceRange[1])}</div>
        </div>
      </div>
      <div className={s.color}>
        <h3>Цвет</h3>
      </div>
      <div className={s.brand}>
        <h3>Бренд</h3>
        <Checkboxes>Динс</Checkboxes>
        <Checkboxes>Кускен</Checkboxes>
        <Checkboxes>Эби</Checkboxes>
        <Checkboxes>Реджио</Checkboxes>
        <Checkboxes>Сайле</Checkboxes>
      </div>
    </div>
  );
};

export default FilterOfCatalog;
