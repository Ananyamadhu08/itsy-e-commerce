import React from "react";

function ProductPageCard({ product }) {
  return (
    <div className="shadow-2xl rounded flex flex-col relative w-72 mb-12 ml-12 bg-rose-200">
      <div className="h-72">
        <img
          className="img-responsive rounded"
          style={{ height: "100%" }}
          src="https://picsum.photos/200"
          alt="dress"
        />

        <div className="px-4 py-2 text-xl text-white text-badge card-badge bg-slate-900">
          new
        </div>
      </div>

      <div className="p-3">
        <h3 className="text-grey-600 subtitle1 mb-2">Printed floral dress</h3>
        <h4 className="subtitle2">Girls white printed dress</h4>
        <h5 className="text-grey-600 mb-4">sold by marge</h5>
        <p className="body1 mb-3">
          White Flower print fit & flare dress. Square neck Short, puff sleeves.
          Knee length in flared hem Crepe fabric with concealed zip closure.
        </p>
        <div className="flex justify-around">
          <button className="btn btn-square-solid btn-xs bg-slate-900  text-rose-200 mr-3 text-2xl font-bold">
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
