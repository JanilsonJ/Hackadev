import React, { useContext } from "react";
import ItemAndValue from "../ItemAndValue/ItemAndValue";
import "./ProductInfo.css";
import { CartContext } from "../../../../Context/cart";

const ProductInfo = (props) => {
  const { bagItems } = useContext(CartContext);

  return (
    <div className="productinfo-main-container">
      {bagItems.map((product, i) => {
        // console.log(bagItems);
        // console.log(product);
        return (
          <ItemAndValue key={i} class="line-botton-container-product-info">
            <div className="container">
              <div className="container_car-item-description">
                <div className="container_car-item-description_product-image">
                  <img src={product.image1} alt={product.name} />
                </div>
                <div>
                  <p>{product.name} <span style={{color: "var(--MetallicRed)"}}>({product.size})</span></p>
                  <p>Unitário: R$ {product.actual_price}</p>
                  <p>Quantidade: {product.quantity} </p>
                </div>
              </div>
            </div>
            <div className="car-item-subtotal">
              <p>Subtotal: R$ {(product.actual_price * product.quantity).toFixed(2)}</p>
            </div>
          </ItemAndValue>
        );
      })}
    </div>
  );
};

export default ProductInfo;
