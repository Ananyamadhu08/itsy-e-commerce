import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/providers/AuthProvider";
import { useCart } from "../../contexts/providers/CartProvider";
import { useWishlist } from "../../contexts/providers/WishlistProvider";
import { addCartItem } from "../../utils/cartUtils";
import { addProductToWishilist } from "../../utils/wishlistUtils";

function ProductPageCard({ product }) {
  const {
    authState: { encodedToken },
  } = useAuth();

  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();

  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();

  const isInCart = cart.find((item) => item._id === product._id);
  const isInWishlist = wishlist.find((item) => item._id === product._id);

  return (
    <div className="shadow-2xl rounded flex flex-col relative mb-1 bg-rose-200 product_card">
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
              onClick={() => addCartItem(encodedToken, product, cartDispatch)}
              className="btn btn-square-solid btn-xs bg-slate-900  text-white mr-3 text-2xl font-bold"
            >
              <span className="fas fa-shopping-cart"></span>add to cart
            </button>
          )}

          {isInWishlist ? (
            <Link
              className="btn btn-square-solid btn-xs bg-slate-900  text-white mr-3 text-2xl font-bold"
              to="/wishlist"
            >
              <span className="fas fa-heart"></span>
              view wishlist
            </Link>
          ) : (
            <button
              onClick={() =>
                addProductToWishilist(encodedToken, product, wishlistDispatch)
              }
              className="btn btn-square-solid btn-xs bg-slate-900 text-white text-2xl font-bold"
              style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
            >
              <span className="fas fa-heart"></span> add to wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductPageCard;
