import React from "react";
import { useAuth } from "../../contexts/providers/AuthProvider";
import { useCart } from "../../contexts/providers/CartProvider";
import { addCartItem } from "../../utils/cartUtils";

function ProductPageCard({ product }) {
  const {
    authState: { encodedToken },
  } = useAuth();

  const { cartDispatch } = useCart();
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

      <div className="p-3">
        <h3 className="text-grey-600 subtitle1 mb-2">{product.title}</h3>
        <h4 className="subtitle2">{product.category}</h4>
        <h5 className="text-grey-600 mb-3">{product.brand}</h5>
        <h4 className="subtitle2 mb-6">total stars: {product.totalStars}</h4>
        <h4 className="body1 mb-5">{product.description}</h4>

        <h4 className="text-line-through">Rs.{product.price}</h4>
        <h2 className="mb-6">Rs.{product.discountPrice}</h2>
        <div className="spacer-3rem"></div>

        <div
          className=" m-auto absolute flex"
          style={{ bottom: "1rem", right: "1.5rem", gap: "1rem" }}
        >
          <button
            onClick={() => addCartItem(encodedToken, product, cartDispatch)}
            className="btn btn-square-solid btn-xs bg-slate-900  text-rose-200 mr-3 text-2xl font-bold"
          >
            <span className="fas fa-shopping-cart"></span>add to cart
          </button>
          <button className="btn btn-square-solid btn-xs bg-slate-900 text-rose-200 text-2xl font-bold">
            <span className="fas fa-heart"></span> add to wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPageCard;
