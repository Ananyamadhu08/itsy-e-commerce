import React, { useEffect, useState } from "react";
import { filterActions } from "../../../contexts/constants/filtersConstants";
import { useFilters } from "../../../contexts/providers/FiltersProvider";

function FilterByRating() {
  const [rangeVal, setRangeVal] = useState(5);

  const { filtersState, filtersDispatch } = useFilters();

  useEffect(() => {
    filtersDispatch({
      type: filterActions.FILTER_BY_RATING,
      payload: parseInt(rangeVal),
    });
  }, [rangeVal]);

  useEffect(() => {
    setRangeVal(filtersState.ratingLessThan);
  }, [filtersState.ratingLessThan]);

  return (
    <div className="p-1">
      <div className="w-full text-rose-200 pb-2">Ratings: {rangeVal} </div>
      <input
        className="w-full"
        type="range"
        min={0}
        max={5}
        step={1}
        value={rangeVal}
        onChange={(e) => setRangeVal(e.target.value)}
      />
    </div>
  );
}

export default FilterByRating;
