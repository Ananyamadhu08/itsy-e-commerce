import React from "react";
import { useAuth } from "../../contexts/providers/AuthProvider";
import { useCart } from "../../contexts/providers/CartProvider";

function OrderSummary() {
  const {
    cartState: { cart },
  } = useCart();

  const {
    authState: { encodedToken },
  } = useAuth();

  const deliveryCharges = 99;

  const totalPreviousPrice = cart.reduce(
    (acc, current) => acc + Number(current.price) * Number(current.qty),
    0
  );
  const totalPrice = cart.reduce(
    (acc, current) => acc + Number(current.discountPrice) * Number(current.qty),
    0
  );
  const totalDiscount = totalPreviousPrice - totalPrice;
  const totalAmount = totalPrice + deliveryCharges;

  return (
    <div className="flex flex-col text-black">
      <h6 className="text-xl font-semibold mb-5 text-rose-200 ">
        Order Summary
      </h6>

      <hr />

      <div className="flex justify-between align-items-center mb-5 mt-5">
        <h6 className="text-lg font-normal text-rose-200">
          Total Quantity : {cart.length}
        </h6>
      </div>

      <div className="flex justify-between align-items-center mb-5 mt-5">
        <h6 className="text-lg font-normal text-rose-200">Total MRP</h6>
        <h6 className="text-lg font-normal text-rose-200">
          Rs. {totalPreviousPrice}{" "}
        </h6>
      </div>

      <div className="flex justify-between align-items-center mb-5 mt-5">
        <h6 className="text-lg font-normal text-rose-200">Discount on MRP</h6>
        <h6 className="text-lg font-normal text-rose-200">
          Rs. {totalDiscount}{" "}
        </h6>
      </div>

      <div className="flex justify-between align-items-center mb-5 mt-5">
        <h6 className="text-lg font-normal text-rose-200">Convinence Fee</h6>
        <div className="flex justify-center-align-items-center">
          <h6 className="text-lg font-normal  mr-3 text-rose-200">
            Rs. {deliveryCharges}{" "}
          </h6>

          {/* <span className="text-slate-300">FREE</span> */}
        </div>
      </div>

      <hr />

      <div className="flex justify-between align-items-center mb-5 mt-5">
        <h6 className="text-lg font-normal text-rose-200">Total</h6>
        <h6 className="text-lg font-normal text-rose-200">
          Rs. {totalAmount}{" "}
        </h6>
      </div>

      <button className="btn text-2xl btn-md btn-square-solid text-white bg-rose-500 btn-bg-hover-rose-800">
        Place Order
      </button>
    </div>
  );
}

export default OrderSummary;
