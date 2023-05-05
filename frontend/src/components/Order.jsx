import React from 'react'

function Order(props) {
  const { productName, price, productImage } = props;
  return (
    <div className="max-w-[1000px] py-4 bg-gray-100 px-4 rounded-md flex ">
      <img className="w-32 h-24 " src={productImage} />
      <div className="description mx-40">
        <p>
         
          <b>{productName}</b>
        </p>

        <p> ${price}</p>
      </div>
    </div>
  );
}

export default Order