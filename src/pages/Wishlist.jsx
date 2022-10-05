import React from "react";
import WishlistPageCard from "../components/Wishlist/WishlistPageCard";
import { useWishlist } from "../contexts/providers/WishlistProvider";

function Wishlist() {
  const {
    wishlistState: { wishlist },
  } = useWishlist();

  return (
    <main
      className="relative w-full"
      style={{ top: "8rem", minHeight: "100vh" }}
    >
      {wishlist.length <= 0 ? (
        <div className="text-center">No items in wishlist!</div>
      ) : (
        <div>
          <h3
            style={{ margin: "0 auto" }}
            className="text-2xl font-semibold rounded-md opacity-80 text-white text-center bg-slate-900 w-max p-5"
          >
            Wishlist: {wishlist.length}
          </h3>

          <div className="flex justify-between mt-10">
            <div className="grid grid-cols-4">
              {wishlist &&
                wishlist.map((product, i) => (
                  <WishlistPageCard product={product} key={i} />
                ))}
            </div>
          </div>
        </div>
      )}

      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
    </main>
  );
}

export default Wishlist;
