import React, { useState } from "react";
import { Slider, Checkbox } from "antd";
import s from "./FilterOfCatalog.module.scss";
import { Button, Dropdown, Space, Tooltip, message } from "antd";
import Selection from "../Selection/Selection";
import Checkboxes from "../Checkbox/Checkboxes";
import { products } from "@/contants/Products";

const FilterOfCatalog = ({
  priceRange,
  setPriceRange,
  handlePriceChange,
  maxPrice,
  formatPrice,
}) => {
  const handleButtonClick = (e) => {
    message.info("Click on left button.");
    console.log("click left button", e);
  };
  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
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
          max={maxPrice}
        />
        <div className={s.price_range}>
          <div className={s.price_block}>{formatPrice(priceRange[0])}</div>
          <div className={s.line_between_prices}></div>
          <div className={s.price_block}>{formatPrice(priceRange[1])}</div>
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
