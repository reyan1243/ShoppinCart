
import {  useDispatch } from "react-redux";
import { cartSlice } from "../../store/cartManager";

import React from "react";

function CartProduct(props) {
  const { productName, desc, price, productImage, productId } = props;
  console.log(productId);

  const dispatch = useDispatch();

  const actions = cartSlice.actions;

  const removeFromCart = () => {
    dispatch(actions.removeFromCart({price, productId}));
    // dispatch(actions.alProduct(price))

    // console.log(totalProducts, totalPrice);
  };

  return (
    <div className="max-w-[1000px] py-4 bg-gray-100 px-4 rounded-md flex ">
      <img className="w-32 h-24 " src={productImage} />
      <div className="description mx-40">
        <p>
          <b>{productName}</b>
        </p>

        <p> ${price}</p>
        <button
          onClick={() => removeFromCart()}
          className="border-2 border-black"
        >
          remove from cart
        </button>
      </div>
    </div>
  );
}

export default CartProduct;
