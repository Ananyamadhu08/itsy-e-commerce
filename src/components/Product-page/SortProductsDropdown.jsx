import React from "react";

function SortProductsDropdown() {
  return (
    <div className="flex w-full justify-end relative left-12">
      <div className="m-8 flex justify-center align-items-center">
        <div className="text-xl text-black mr-1">Sort by :</div>

        <div className="custom-select m-16">
          <select className="bg-slate-900 text-white text-xl">
            <option selected disable>
              Choose a filter
            </option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SortProductsDropdown;
