import React, { useEffect, useState } from "react";
import { filterActions } from "../../contexts/constants/filtersConstants";
import { useFilters } from "../../contexts/providers/FiltersProvider";

function SortProductsDropdown() {
  const [sortBy, setSortBy] = useState("ALL");
  const { filtersDispatch } = useFilters();

  useEffect(() => {
    filtersDispatch({
      type: filterActions.SORT_BY,
      payload: sortBy,
    });
  }, [sortBy]);

  return (
    <div className="flex w-full justify-end relative left-12">
      <div className="m-8 flex justify-center align-items-center">
        <div className="text-xl text-black mr-1">Sort by :</div>

        <div className="custom-select m-16">
          <select
            className="bg-slate-900 text-white text-xl"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="ALL">All</option>
            <option value="HIGH_TO_LOW"> Price: High to Low </option>
            <option value="LOW_TO_HIGH"> Price: Low to High </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SortProductsDropdown;
