import React from "react";
import AddressBox from "../components/Cart-page/AddressBox";
import CartPageCard from "../components/Cart-page/CartPageCard";
import OrderSummary from "../components/Cart-page/OrderSummary";
import { useCart } from "../contexts/providers/CartProvider";

function Cart() {
  const {
    cartState: { cart },
  } = useCart();
  return (
    <main className="relative " style={{ top: "5rem", minHeight: "100vh" }}>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>

      <h3
        style={{ margin: "0 auto" }}
        className="text-2xl font-semibold rounded-md opacity-80 text-white text-center bg-slate-900 w-max p-5"
      >
        Cart: {cart.length}
      </h3>

      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>

      <div style={{ margin: "auto" }} className="flex justify-center ">
        <div style={{ borderRight: "1px dotted black" }} className="w-full p-5">
          <AddressBox />

          <div
            style={{ gap: "3rem", maxWidth: "400rem" }}
            className="flex flex-row flex-wrap ml-16"
          >
            {cart &&
              cart.map((product, i) => (
                <CartPageCard product={product} key={i} />
              ))}
          </div>
        </div>

        <div className="w-40-percent h-max p-10 mx-10 bg-slate-900">
          <OrderSummary />
        </div>
      </div>

      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
    </main>
  );
}

export default Cart;
