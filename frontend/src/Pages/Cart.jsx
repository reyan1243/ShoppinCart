import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartProduct from "../components/CartProduct/CardProduct";
// import { emptyCart } from "../store/cartManager";
import axios from "axios";
import { cartSlice } from "../store/cartManager";

function Cart() {
  const dispatch = useDispatch();
  const actions = cartSlice.actions;
  const totalProducts = useSelector((state) => state.cart.totalProducts);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cartProductsId = useSelector((state) => state.cart.productsInCartId);
  const products = useSelector((state) => state.cart.products);

  console.log(totalPrice);

  async function emptycart() {
    try {
      const data = await axios.post(
        "http://localhost:3008/api/cart/createCart",
        {
          products: cartProductsId,
          totalPrice: totalPrice,
          productCount: totalProducts,
        }
      );
      // console.log(data);
      dispatch(actions.emptyCart());
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="max-w-[1340px] mx-auto">
      {cartProductsId.map((e) => {
        const prod = products.find((element) => element._id === e);
        return (
          <CartProduct
            key={prod._id}
            productName={prod.name}
            desc={prod.description}
            price={prod.price}
            productImage={prod.imageUrl}
            productId={prod._id}
          />
        );
      })}

      <div className="flex flex-col">
        <div className="flex">
          <h1>Total Amount : $</h1>
          {totalPrice}
        </div>
        <div>
          <button className="border-2 border-black p-2 font-bold" onClick={() => emptycart()}>
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
