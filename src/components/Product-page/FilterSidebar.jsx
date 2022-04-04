import React from "react";

function FilterSidebar() {
  return (
    <div
      className="relative ml-10 p-5 filter__sidebar__container bg-slate-900"
      style={{ top: "4rem" }}
    >
      <div className="flex justify-between align-items-center">
        <div className="font-semibol text-xl text-white">Filters</div>

        <button className="btn-text-underline text-white">Clear</button>
      </div>
      <div className="spacer-1rem"></div>
      <hr />
      <div className="spacer-1rem"></div>
      <ul className="flex flex-col">
        <li className="pb-3 pt-3 text-white text-lg">Categories</li>
        <li className="pb-3 pt-3">
          <label className="text-white text-lg">
            <input type="checkbox" className="mr-3" id="" />
            paints
          </label>
        </li>
        <li className="pb-3">
          <label className="text-white text-lg">
            <input type="checkbox" className="mr-3" id="" />
            pens
          </label>
        </li>
        <li className="pb-3">
          <label className="text-white text-lg">
            <input type="checkbox" className="mr-3" id="" />
            crayons
          </label>
        </li>
        <li className="pb-3">
          <label className="text-white text-lg">
            <input type="checkbox" className="mr-3" id="" />
            notebooks
          </label>
        </li>
      </ul>

      <div className="spacer-1rem"></div>
      <hr />
      <div className="spacer-1rem"></div>
      <ul className="flex flex-col">
        <li className="pb-3 pt-3 text-white text-lg">Brands</li>
        <li className="pb-3 pt-3">
          <label className="text-white text-lg">
            <input type="checkbox" className="mr-3" id="" />
            crayola
          </label>
        </li>
        <li className="pb-3">
          <label className="text-white text-lg">
            <input type="checkbox" className="mr-3" id="" />
            faber castell
          </label>
        </li>
        <li className="pb-3">
          <label className="text-white text-lg">
            <input type="checkbox" className="mr-3" id="" />
            staedtler
          </label>
        </li>
        <li className="pb-3">
          <label class="text-white text-lg">
            <input type="checkbox" className="mr-3" id="" />
            maped
          </label>
        </li>
      </ul>
    </div>
  );
}

export default FilterSidebar;
