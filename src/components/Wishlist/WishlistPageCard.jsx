import React from "react";
import { useCart } from "../../contexts/providers/CartProvider";
import { useProduct } from "../../contexts/providers/ProductProvider";
import { useWishlist } from "../../contexts/providers/WishlistProvider";
import { useAuth } from "../../contexts/providers/AuthProvider";

import { addCartItem } from "../../utils/cartUtils";
import { deleteWishilistItem } from "../../utils/wishlistUtils";
import { Link } from "react-router-dom";

function WishlistPageCard({ product }) {
  const { wishlistDispatch } = useWishlist();

  const {
    productState: { products },
  } = useProduct();

  const {
    authState: { encodedToken },
  } = useAuth();

  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();

  const isInCart = cart.find((item) => item._id === product._id);

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

      <div className="p-3 mb-10">
        <div>
          <h3 className="text-grey-600 subtitle1 mb-2">{product.title}</h3>
          <h4 className="subtitle2">{product.category}</h4>
          <h5 className="text-grey-600 mb-4">{product.brand}</h5>
          <h4 className="subtitle2 mb-6">total stars: {product.totalStars}</h4>
          <p className="body1 mb-3">{product.description}</p>
          <h4 className="text-line-through">Rs.{product.price}</h4>
          <h2 className="mb-6">Rs.{product.discountPrice}</h2>
        </div>

        <div
          className=" m-auto absolute flex"
          style={{ bottom: "0.5rem", right: "0.5rem", gap: "0.2rem" }}
        >
          {isInCart ? (
            <Link
              className="btn btn-square-solid btn-xs bg-slate-900  text-white mr-3 text-2xl font-bold"
              to="/cart"
            >
              <span className="fas fa-shopping-cart"></span>
              view cart
            </Link>
          ) : (
            <button
              className="btn btn-square-solid btn-xs bg-slate-900  text-rose-200 mr-3 font-bold text-2xl"
              onClick={() => addCartItem(encodedToken, product, cartDispatch)}
            >
              <span className="fas fa-shopping-cart"></span>add to cart
            </button>
          )}

          <button
            className="btn btn-square-solid btn-xs bg-slate-900 text-white text-2xl"
            onClick={() =>
              deleteWishilistItem(encodedToken, product._id, wishlistDispatch)
            }
          >
            <span className="fa-solid fa-trash-can"></span>remove from wishilist
          </button>
        </div>
      </div>
    </div>
  );
}

export default WishlistPageCard;
