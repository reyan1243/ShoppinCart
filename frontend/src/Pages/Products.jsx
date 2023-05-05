import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useQuery, useMutation, useQueryClient } from "react-query";
import Product from "../components/Product/Product";
import { useSelector, useDispatch } from "react-redux";
// import { cartSlice } from "../store/cartManager";
import { getProducts} from "../store/cartManager";


function Products() {
  // const [product, setPoduct] = useState([]);

  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart.products);
  console.log(products);

  // const actions = cartSlice.actions;

  // const fetchProducts = async () => {
  //   try {
  //     const query = await axios.get("http://localhost:3008/api/products");
  //     console.log(query.data);

  //     if (!query) {
  //       console.log("database empty");
  //     }
  //     // dispatch(actions.allProducts(query.data));
  //     setProduct(query.data);

  //     // console.log(products)
  //     // console.log(product)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="max-w-[1240px] mx-auto grid grid-cols-4 gap-4">
      {products?.map((e) => {
        return (
          <Product
            key={e._id}
            productName={e.name}
            desc={e.description}
            price={e.price}
            productImage={e.imageUrl}
            productId={e._id}
          />
        );
      })}
    </div>
  );
}

export default Products;
