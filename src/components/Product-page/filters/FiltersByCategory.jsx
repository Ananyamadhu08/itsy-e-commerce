import React from "react";
import { filterActions } from "../../../contexts/constants/filtersConstants";
import { useFilters } from "../../../contexts/providers/FiltersProvider";
import FilterListItem from "./FilterListItem";

const categoryOptions = ["paints", "crafting", "pens", "stationery"];

const FiltersByCategory = () => {
  const { filtersState, filtersDispatch } = useFilters();

  return (
    <ul className="flex flex-col">
      <li className="text-rose-200 pt-3 pb-3 text-lg">Categories</li>
      {categoryOptions.map((item, i) => (
        <FilterListItem
          key={i}
          value={filtersState.categories[item.toLowerCase()]}
          onChange={() =>
            filtersDispatch({
              type: filterActions.FILTER_BY_CATEGORY,
              payload: item.toLowerCase(),
            })
          }
          text={item}
        />
      ))}
    </ul>
  );
};

export default FiltersByCategory;
