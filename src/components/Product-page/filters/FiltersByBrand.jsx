import React from "react";
import { filterActions } from "../../../contexts/constants/filtersConstants";
import { useFilters } from "../../../contexts/providers/FiltersProvider";
import FilterListItem from "./FilterListItem";

const brandOptions = ["staedtler", "faber castell", "maped", "crayola"];

function FiltersByBrand() {
  const { filtersState, filtersDispatch } = useFilters();

  return (
    <ul className="flex flex-col">
      <li className="text-rose-200 pt-3 pb-3 text-lg">Brands</li>
      {brandOptions.map((item, i) => (
        <FilterListItem
          key={i}
          value={filtersState.brands[item.toLowerCase()]}
          onChange={() =>
            filtersDispatch({
              type: filterActions.FILTER_BY_BRAND,
              payload: item.toLowerCase(),
            })
          }
          text={item}
        />
      ))}
    </ul>
  );
}

export default FiltersByBrand;
