import React from "react";
import "./ItemAndValue.css";

const ItemAndValue = (props) => {
  return (
    <div className={`container-itemAndValue ${props.class}`}>
      {props.children}
    </div>
  );
};

export default ItemAndValue;
