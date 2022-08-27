import React from "react";
import "./Label.css";

const Label = (props) => {
  return (
    <label className={props.class} htmlFor={props.for}>
      {props.children}
    </label>
  );
};

export default Label;
