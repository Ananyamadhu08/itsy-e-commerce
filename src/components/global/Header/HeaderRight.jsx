import React from "react";
import { Link } from "react-router-dom";

function HeaderRight() {
  return (
    <div className="flex justify-center align-items-center">
      <Link
        to="/pages/signup-login-page/login-page.html"
        className="btn btn-square-solid btn-md text-white bg-rose-600 btn-bg-hover-rose-600 mr-7"
      >
        LOGIN
      </Link>

      <Link to="/pages/wishlist-page/wishlist-page.html">
        <span className="w-full h-full tooltip btn-icon badge-container mr-3">
          <i className="text-rose-500 text-hover-rose-300 fas fa-heart text-3xl"></i>
          <span className="icon-badge-sm bg-slate-100 text-black text-xs status-badge">
            1
          </span>
          <span className="tooltip-text text-black text-lg tooltip-text-bottom bg-rose-100">
            Wish List
          </span>
        </span>
      </Link>
      <Link to="/pages/cart-page/cart-page.html">
        <span className="btn-icon badge-container tooltip">
          <i className="text-rose-500 text-hover-rose-300 fas fa-shopping-cart text-3xl"></i>
          <span className="icon-badge-sm bg-rose-500 text-white text-xs status-badge bg-slate-100 text-black">
            2
          </span>
          <span className="tooltip-text text-black text-lg tooltip-text-bottom bg-rose-100">
            Cart
          </span>
        </span>
      </Link>
    </div>
  );
}

export default HeaderRight;
