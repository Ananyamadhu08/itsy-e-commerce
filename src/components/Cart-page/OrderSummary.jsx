import React from "react";

function OrderSummary() {
  return (
    <div className="flex flex-col text-black">
      <h6 className="text-xl font-semibold mb-5 text-rose-200 ">
        Order Summary
      </h6>

      <hr />

      <div className="flex justify-between align-items-center mb-5 mt-5">
        <h6 className="text-lg font-normal text-rose-200">Total Quantity</h6>
        <h6 className="text-lg font-normal text-rose-200">Rs. 883</h6>
      </div>

      <div className="flex justify-between align-items-center mb-5 mt-5">
        <h6 className="text-lg font-normal text-rose-200">Total MRP</h6>
        <h6 className="text-lg font-normal text-rose-200">Rs. 883</h6>
      </div>

      <div className="flex justify-between align-items-center mb-5 mt-5">
        <h6 className="text-lg font-normal text-rose-200">Discount on MRP</h6>
        <h6 className="text-lg font-normal text-rose-200">Rs. 0</h6>
      </div>

      <div className="flex justify-between align-items-center mb-5 mt-5">
        <h6 className="text-lg font-normal text-rose-200">Convinence Fee</h6>
        <div className="flex justify-center-align-items-center">
          <h6 className="text-lg font-normal text-line-through mr-3 text-rose-200">
            Rs. 88
          </h6>

          <span className="text-slate-300">FREE</span>
        </div>
      </div>

      <hr />

      <div className="flex justify-between align-items-center mb-5 mt-5">
        <h6 className="text-lg font-normal text-rose-200">Total</h6>
        <h6 className="text-lg font-normal text-rose-200">Rs. 5484</h6>
      </div>

      <button className="btn text-2xl btn-md btn-square-solid text-white bg-rose-500 btn-bg-hover-rose-800">
        Place Order
      </button>
    </div>
  );
}

export default OrderSummary;
