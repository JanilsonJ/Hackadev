import React from "react";
import ItemAndValue from "../ItemAndValue/ItemAndValue";
import "./AddreessInfo.css";

import { FiEdit } from "react-icons/fi";
import { GoHome } from "react-icons/go";

const AddreessInfo = (props) => {
  return (
    <div className="address-main-container">
      <div>
        <div className="address-container">
          <div className="address">{props.children}</div>
        </div>

        <div className="address-options-container">
          <div class="address-options-container_mobile">
            <div>
              <FiEdit />
              <a href="">editar</a>
            </div>
            <div>
              <GoHome />
              <a href="">outros endereços</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddreessInfo;
