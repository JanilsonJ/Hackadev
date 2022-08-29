import React from "react";
// import ItemAndValue from "../ItemAndValue/ItemAndValue";
import "./AddreessInfo.css";

import { FiEdit } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";

const AddreessInfo = (props) => {

  return (
    <div className="address-main-container">
      <div>
        <div className="address-container">
          <div className="address">{props.children}</div>
        </div>

        <div className="address-options-container">
          <div className="address-options-container_mobile">
            <div>
              <FiEdit />
              <Link to="/account">editar </Link>
            </div>
            <div>
              <GoHome />
              <Link to="/account">outros endereços </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddreessInfo;
