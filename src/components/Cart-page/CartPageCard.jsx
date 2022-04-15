import React from "react";
import { useAuth } from "../../contexts/providers/AuthProvider";
import { useCart } from "../../contexts/providers/CartProvider";
import {
  incrementCartItemQty,
  decrementCartItemQty,
  deleteCartItem,
} from "../../utils/cartUtils";

function CartPageCard({ product }) {
  const {
    authState: { encodedToken },
  } = useAuth();
  const { cartDispatch } = useCart();

  console.log(product._id);

  return (
    <div className="shadow-2xl rounded flex flex-col relative w-72 mb-12 ml-12 bg-rose-200">
      <div className="h-72">
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

      <div className="p-3 mb-28">
        <div>
          <h3 className="text-grey-600 subtitle1 mb-2">{product.title}</h3>
          <h4 className="subtitle2">{product.category}</h4>
          <h5 className="text-grey-600 mb-4">{product.brand}</h5>
          <h4 className="subtitle2 mb-6">total stars: {product.totalStars}</h4>
          <p className="body1 mb-3">{product.description}</p>
          <h4 className="text-line-through">Rs.{product.price}</h4>
          <h2 className="mb-6">Rs.{product.discountPrice}</h2>
        </div>

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
              onClick={() =>
                decrementCartItemQty(encodedToken, product._id, cartDispatch)
              }
            >
              -
            </button>
          </div>
        </div>
        <div
          className=" m-auto absolute flex"
          style={{ bottom: "0.5rem", right: "0.6rem", gap: "0.6rem" }}
        >
          <button className="btn btn-square-solid btn-xs bg-slate-900  text-rose-200 mr-3 font-bold text-2xl">
            <span className="fas fa-heart"></span>add to wishlist
          </button>
          <button
            className="btn btn-square-solid btn-xs bg-slate-900 text-rose-200 text-2xl"
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
