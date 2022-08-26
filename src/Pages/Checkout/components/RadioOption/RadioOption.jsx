import React from "react";
import "./RadioOption.css";

const RadioOption = (props) => {
  return (
    <div class="radio-option">
      <input type="radio" id={props.id} name={props.name} value={props.value} />
      <div>{props.children}</div>
    </div>
  );
};

export default RadioOption;
