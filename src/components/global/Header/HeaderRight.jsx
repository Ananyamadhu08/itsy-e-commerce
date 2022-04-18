import React from "react";
import { Link } from "react-router-dom";
import { authActions } from "../../../contexts/constants/authConstants";
import { useAuth } from "../../../contexts/providers/AuthProvider";
import { useCart } from "../../../contexts/providers/CartProvider";
import { useWishlist } from "../../../contexts/providers/WishlistProvider";

function HeaderRight() {
  const {
    authState: { encodedToken },
    authDispatch,
  } = useAuth();

  const {
    cartState: { cart },
  } = useCart();

  const {
    wishlistState: { wishlist },
  } = useWishlist();

  return (
    <div className="flex justify-center align-items-center">
      {encodedToken ? (
        <div
          onClick={() => authDispatch({ type: authActions.LOGOUT_SUCCESS })}
          className="btn btn-square-solid btn-md text-white bg-rose-600 btn-bg-hover-rose-800 mr-7"
        >
          LOGOUT
        </div>
      ) : (
        <Link
          to="/login"
          className="btn btn-square-solid btn-md text-white bg-rose-600 btn-bg-hover-rose-800 mr-7"
        >
          LOGIN
        </Link>
      )}

      <Link to="/wishlist">
        <span className="w-full h-full tooltip btn-icon badge-container mr-3">
          <i className="text-rose-500 text-hover-rose-800 fas fa-heart text-4xl"></i>
          <span
            className="icon-badge-md bg-slate-100 text-black text-xs status-badge"
            style={{ bottom: "1.3rem" }}
          >
            {wishlist.length}
          </span>
          <span className="tooltip-text text-black text-lg tooltip-text-bottom bg-rose-100">
            Wish List
          </span>
        </span>
      </Link>
      <Link to="/cart">
        <span className="btn-icon badge-container tooltip">
          <i className="text-rose-500 text-hover-rose-800 fas fa-shopping-cart text-4xl"></i>
          <span
            className="icon-badge-md bg-rose-500 text-white text-xs status-badge bg-slate-100 text-black"
            style={{ bottom: "1.3rem" }}
          >
            {cart.length}
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
