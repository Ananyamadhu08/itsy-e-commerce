import React from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import HeaderSearchbar from "./HeaderSearchbar";

function Header() {
  return (
    <header className="w-full h-20 shadow bg-slate-900 fixed z-50">
      <div className="flex justify-around align-items-center h-full w-full">
        <HeaderLeft />
        <HeaderSearchbar />
        <HeaderRight />
      </div>
    </header>
  );
}

export default Header;
