import React, { useEffect, useState } from "react";
import axios from "axios";
import Order from "../components/Order"
import Product from "../components/Product/Product";
import { useSelector, useDispatch } from "react-redux";

function Orders() {
  const [orders, setOrders] = useState([]);

  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart.products);
  // console.log(products);

  // const actions = cartSlice.actions;

  const fetchOrders = async () => {
    let orders
    try {
      const query = await axios.get("http://localhost:3008/api/cart");
      console.log(query.data);

      if (!query) {
        console.log("database empty");
      }
      // dispatch(actions.allProducts(query.data));
      setOrders(query.data[0]);
      // console.log(query.data[0].totalPrice)
      // console.log(query.data[0].products);
      orders = query.data[0].products;

      // console.log(products)
      // console.log(product)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="max-w-[1240px] mx-auto">
      <div className="font-bold flex flex-col justify-center items-center border-2 py-8">
        <h1>Earned ${orders.totalPrice}</h1>
        <h1> {orders.productCount} Products</h1>
      </div>

      {orders.products?.map((e) => {
        return (
          <Order
            className="gap-4 mb-2"
            key={e._id}
            productName={e.name}
            desc={e.description}
            price={e.price}
            productImage={e.imageUrl}
          />
        );
      })}
    </div>
  );
}

export default Orders;
