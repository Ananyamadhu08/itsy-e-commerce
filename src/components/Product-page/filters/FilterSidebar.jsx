import React from "react";
import FiltersByBrand from "./FiltersByBrand";
import FiltersByCategory from "./FiltersByCategory";

function FilterSidebar() {
  return (
    <div
      className="relative ml-10 p-5 filter__sidebar__container bg-slate-900"
      style={{ top: "4rem" }}
    >
      <div className="flex justify-between align-items-center">
        <div className="font-semibol text-xl text-rose-200">Filters</div>

        <button className="btn-text-underline text-rose-200">Clear</button>
      </div>
      <div className="spacer-1rem"></div>
      <hr />
      <div className="spacer-1rem"></div>
      <FiltersByCategory />

      <div className="spacer-1rem"></div>
      <hr />
      <div className="spacer-1rem"></div>
      <FiltersByBrand />
    </div>
  );
}

export default FilterSidebar;
