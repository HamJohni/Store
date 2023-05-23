import React from "react";
import s from './Selection.module.scss'
const Selection = () => {
  return (
    <div className={s.Selection}>
      <select>
        <option value="someOption">Some option</option>
        <option value="otherOption">Other option</option>
      </select>
    </div>
  );
};

export default Selection;
