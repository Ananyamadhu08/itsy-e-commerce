import React from "react";
import { useAuth } from "../../contexts/providers/AuthProvider";
import { useCart } from "../../contexts/providers/CartProvider";
import { useWishlist } from "../../contexts/providers/WishlistProvider";
import {
  incrementCartItemQty,
  decrementCartItemQty,
  deleteCartItem,
} from "../../utils/cartUtils";
import {
  addProductToWishilist,
  deleteWishilistItem,
} from "../../utils/wishlistUtils";

function CartPageCard({ product }) {
  const {
    authState: { encodedToken },
  } = useAuth();
  const { cartDispatch } = useCart();

  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();

  const isInWishlist = wishlist.find((item) => item._id === product._id);

  return (
    <div className="shadow-2xl rounded flex flex-col relative w-72 mb-12 ml-12 bg-rose-200 cart_page_card">
      <div className="h-56">
        <img
          className="img-responsive rounded"
          style={{ height: "100%" }}
          src={product.img}
          alt={product.title}
        />

        {product.offers.newArrival && (
          <div className="px-4 py-2 text-xl text-white text-badge card-badge bg-slate-900">
            new
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-sm mb-1 text-grey-800">{product.title}</h3>
        <h4 className="text-grey-800 text-sm mb-1">{product.category}</h4>
        <h5 className="text-grey-800 text-sm mb-1">{product.brand}</h5>
        <h4 className="text-sm mb-2 text-grey-800">
          total stars: {product.totalStars}
        </h4>
        <h4 className="text-sm mb-2 text-grey-900">{product.description}</h4>

        <h4 className="text-line-through text-sm text-grey-600">
          Rs.{product.price}
        </h4>
        <h2 className="mb-3 text-md">Rs.{product.discountPrice}</h2>

        <div
          className="absolute flex"
          style={{ bottom: "1rem", gap: "0.6rem", alignItems: "center" }}
        ></div>

        <div className="mb-2 ml-1 absolute" style={{ bottom: "3.5rem" }}>
          <h5 className="mb-2">Quantity: {product.qty}</h5>
          <div className="flex" style={{ gap: "0.6rem" }}>
            <button
              className="bg-rose-300 btn-xs"
              style={{ border: "0.1rem solid white" }}
              onClick={() =>
                incrementCartItemQty(encodedToken, product._id, cartDispatch)
              }
            >
              +
            </button>
            <button
              className="bg-rose-300 btn-xs"
              style={{ border: "0.1rem solid white" }}
              onClick={() => {
                if (product.qty > 1) {
                  decrementCartItemQty(encodedToken, product._id, cartDispatch);
                }
              }}
            >
              -
            </button>
          </div>
        </div>
        <div
          className="absolute flex w-full justify-center"
          style={{ bottom: "0.5rem", gap: "2rem", right: "0.2rem" }}
        >
          {isInWishlist ? (
            <button
              className="btn btn-square-solid btn-xs bg-slate-900  text-white font-bold text-2xl"
              onClick={() =>
                deleteWishilistItem(encodedToken, product._id, wishlistDispatch)
              }
            >
              <span className="fa-solid fa-trash-can"></span>remove from
              wishlist
            </button>
          ) : (
            <button
              onClick={() =>
                addProductToWishilist(encodedToken, product, wishlistDispatch)
              }
              className="btn btn-square-solid btn-xs bg-slate-900  text-white font-bold text-2xl"
            >
              <span className="fas fa-heart"></span>add to wishlist
            </button>
          )}
          <button
            className="btn btn-square-solid btn-xs bg-slate-900 text-white text-2xl"
            onClick={() =>
              deleteCartItem(encodedToken, product._id, cartDispatch)
            }
          >
            <span className="fa-solid fa-trash-can"></span>remove from cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPageCard;
