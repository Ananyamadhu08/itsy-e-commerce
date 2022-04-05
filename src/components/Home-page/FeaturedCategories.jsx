import React from "react";

function FeaturedCategories() {
  return (
    <div>
      <h3 className="h3 font-semibold text-center text-slate-900 mb-1">
        Featured Categories
      </h3>
      <div class="w-50-percent bg-rose-500 h-1 m-auto"></div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>

      <div
        className="grid grid-cols-4 w-full m-auto"
        style={{ maxWidth: "60rem", gap: "1rem" }}
      >
        <div className="h-52 w-52  rounded-2xl shadow-xl flex justify-center align-items-center cursor-pointer home__page__brand__logo bg-slate-900">
          <h3 className="text-2xl text-rose-500 shadown-2xl p-2 w-full font-semibold">
            paints & watercolors
          </h3>
        </div>
        <div className="h-52 w-52  rounded-2xl shadow-xl flex justify-center align-items-center cursor-pointer home__page__brand__logo bg-slate-900">
          <h3 className="text-2xl text-rose-500 shadown-2xl p-2 w-full font-semibold">
            crafting & art tools
          </h3>
        </div>
        <div className="h-52 w-52 rounded-2xl shadow-xl flex justify-center align-items-center cursor-pointer home__page__brand__logo bg-slate-900">
          <h3 className="text-2xl text-rose-500 shadown-2xl p-2 w-full font-semibold">
            pens & pencils
          </h3>
        </div>
        <div className="h-52 w-52 rounded-2xl shadow-xl flex justify-center align-items-center cursor-pointer home__page__brand__logo bg-slate-900">
          <h3 className="text-2xl text-rose-500 shadown-2xl p-2 w-full font-semibold">
            school & stationery
          </h3>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCategories;
