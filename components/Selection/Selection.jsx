import React from "react";
import s from './Selection.module.scss'
const Selection = ({children}) => {
  return (
    <div className={s.Selection}>
      <select>
        <option value="someOption">{children}</option>
        <option value="otherOption">Other option</option>
      </select>
    </div>
  );
};

export default Selection;
