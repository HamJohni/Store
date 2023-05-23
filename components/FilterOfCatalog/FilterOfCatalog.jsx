import React from "react";
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
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className={s.FilterOfCatalog}>
      <div className={s.Select}>
        <h3>Раздел</h3>
        <Selection></Selection>
      </div>

      <div className={s.price}>
        <h3>Цена</h3>
        <Slider
        style={{position:"relative"}}
          range={{
            draggableTrack: true,
          }}
          defaultValue={[20, 50]}
        />
      </div>
      <div className={s.color}>
        <h3>Цвет</h3>
      </div>
      <div className={s.brand}>
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
