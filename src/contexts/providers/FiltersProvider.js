import { createContext, useContext, useEffect, useReducer } from "react";
import {
  filterByBrand,
  filterByCategory,
  filterByRatings,
} from "../../utils/filterUtils";
import { filtersReducer } from "../reducers/filtersReducer";
import { useProduct } from "./ProductProvider";

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
  ratingLessThan: 5,
};

export default function FiltersProvider({ children }) {
  const {
    productState: { products },
    productDispatch,
  } = useProduct();
  const [filtersState, filtersDispatch] = useReducer(
    filtersReducer,
    filtersIntState
  );

  const productsFilteredByCategory = filterByCategory(
    products,
    filtersState.categories
  );

  console.log(productsFilteredByCategory);

  const productsFilteredByBrandAndCategory = filterByBrand(
    productsFilteredByCategory,
    filtersState.brands
  );

  console.log(productsFilteredByBrand);

  const productsFilteredByBrandCategoryAndRatings = filterByRatings(
    productsFilteredByBrandAndCategory,
    filtersState.ratingLessThan
  );

  return (
    <FiltersContext.Provider value={{ filtersState, filtersDispatch }}>
      {children}
    </FiltersContext.Provider>
  );
}

export const useFilters = () => useContext(FiltersContext);
