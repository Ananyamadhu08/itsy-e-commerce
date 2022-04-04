import React from "react";
import { Link } from "react-router-dom";

function HeaderSearchbar() {
  return (
    <form action="" className="search__bar__wrapper">
      <input type="text" className="search__bar" placeholder="Search" />
      <Link to="/">
        <i className="fas fa-search search__icon text-rose-500"></i>
      </Link>
    </form>
  );
}

export default HeaderSearchbar;
