import React from "react";
import "./Title.css";

const Title = (props) => {
  return (
    <div className={`container-title ${props.class}`}>
      <p className="title">{props.children}</p>
    </div>
  );
};

export default Title;
