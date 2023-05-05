// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../../store/cartManager";


import React from 'react'

function Product(props) {

  const { productName, desc, price, productImage, productId } = props;
  
   const totalProducts = useSelector((state) => state.cart.totalProducts);
   const totalPrice = useSelector((state) => state.cart.totalPrice);
  const productsId = useSelector((state) => state.cart.productsId);

   const dispatch = useDispatch();

   const actions = cartSlice.actions;

  const addToCart = () => {
    dispatch(actions.addProduct({price,productId}))
    // dispatch(actions.alProduct(price))

    // console.log(totalProducts,totalPrice)

  }

  return (
    <div className="max-w-[300px] py-4 bg-gray-100 px-4 rounded-md">
        <img className="w-64 h-36 " src={productImage} />
        <div className="description">
          <p>
            <b>{productName}</b>
          </p>

        <p> ${price}</p>
        <button onClick={()=>addToCart(productId)}  className="border-2 border-black">Add to cart</button>
      </div>  
      {/* </Link> */}
      {/* <button onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button> */}
    </div>
  )
}

export default Product
