import React from "react";
import { Link } from "react-router-dom";

function HeaderLeft() {
  return (
    <div className="flex justify-center align-items-center">
      <Link to="/">
        <h5 className="h5 cursor-pointer mr-10 text-rose-500 logo text-small text-italic inline-flex justify-center align-items-center">
          {/* <img src="" alt="logo" class="w-14 h-14" /> */}
          Itsy
        </h5>
      </Link>

      <Link to="/">
        <h6 className="mr-6 cursor-pointer h6 text-white text-hover-rose-500">
          Home
        </h6>
      </Link>
      <Link to="/products">
        <h6 className="mr-6 cursor-pointer h6 text-white text-hover-rose-500">
          Shop
        </h6>
      </Link>
    </div>
  );
}

export default HeaderLeft;
