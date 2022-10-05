import React from "react";

const FilterListItem = ({ value, onChange, text }) => {
  return (
    <li className="pb-3">
      <label className="text-rose-200 text-lg">
        {value ? (
          <input type="checkbox" checked onChange={onChange} className="mr-3" />
        ) : (
          <input type="checkbox" onChange={onChange} className="mr-3" />
        )}
        {text}
      </label>
    </li>
  );
};

export default FilterListItem;
