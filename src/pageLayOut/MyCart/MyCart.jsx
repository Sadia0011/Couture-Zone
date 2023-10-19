import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CartCard from "../CartCard/CartCard";

const MyCart = () => {
  const loadedCartData = useLoaderData();
  const [cartData, setCartData] = useState(loadedCartData);
  console.log(cartData);
  return (
    <div>
      <h2 className="text-3xl text-blue-800 text-center font-semibold mb-8 mt-5">
        My Cart
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        {cartData.map((cart) => (
          <CartCard
            key={cart._id}
            cart={cart}
            cartData={cartData}
            setCartData={setCartData}
          ></CartCard>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
