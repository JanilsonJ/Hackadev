import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <div className="button-container">
      <button className="button">{props.children}</button>
    </div>
  );
};

export default Button;
