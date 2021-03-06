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
      style={{ top: "3rem", minHeight: "100vh" }}
    >
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>

      <h3
        style={{ margin: "0 auto" }}
        className="text-2xl font-semibold rounded-md opacity-80 text-white text-center bg-slate-900 w-max p-5"
      >
        Wishlist: {wishlist.length}
      </h3>

      <div className="spacer-3rem"></div>

      <div
        className=" mt-9 grid grid-cols-3  ml-16"
        style={{ minWidth: "980px", gap: "1rem" }}
      >
        {wishlist &&
          wishlist.map((product, i) => (
            <WishlistPageCard product={product} key={i} />
          ))}
      </div>

      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
    </main>
  );
}

export default Wishlist;
