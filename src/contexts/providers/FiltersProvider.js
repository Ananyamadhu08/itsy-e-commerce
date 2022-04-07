import { createContext, useContext, useEffect, useReducer } from "react";
import { filtersReducer } from "../reducers/filtersReducer";

const FiltersContext = createContext();

const filtersIntState = {
  sortBy: null,
  categories: {
    paints: false,
    crafting: false,
    pens: false,
    stationery: false,
  },
  brands: {
    maped: false,
    faberCastell: false,
    staedtler: false,
    crayola: false,
  },
};

export default function FiltersProvider({ children }) {
  const [filtersState, filtersDispatch] = useReducer(
    filtersReducer,
    filtersIntState
  );

  return (
    <FiltersContext.Provider value={{ filtersState, filtersDispatch }}>
      {children}
    </FiltersContext.Provider>
  );
}

export const useFilters = () => useContext(FiltersContext);
