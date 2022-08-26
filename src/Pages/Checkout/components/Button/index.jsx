import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <div class="button-container">
      <button class="button">{props.children}</button>
    </div>
  );
};

export default Button;
