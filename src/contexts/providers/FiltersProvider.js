import { createContext, useContext, useReducer } from "react";
import {
  filterByBrand,
  filterByCategory,
  filterByRatings,
} from "../../utils/filterUtils";
import { sortProducts } from "../../utils/sortProducts";
import { filtersReducer } from "../reducers/filtersReducer";
import { useProduct } from "./ProductProvider";

const FiltersContext = createContext();

const filtersIntState = {
  sortBy: "ALL",
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

export const FiltersProvider = ({ children }) => {
  const [filtersState, filtersDispatch] = useReducer(
    filtersReducer,
    filtersIntState
  );

  const {
    productState: { products },
    productDispatch,
  } = useProduct();

  const productsFilteredByCategory = filterByCategory(
    products,
    filtersState.categories
  );

  const productsFilteredByBrandAndCategory = filterByBrand(
    productsFilteredByCategory,
    filtersState.brands
  );

  const productsFilteredByBrandCategoryAndRatings = filterByRatings(
    productsFilteredByBrandAndCategory,
    filtersState.ratingLessThan
  );

  const sortedProducts = sortProducts(
    productsFilteredByBrandCategoryAndRatings,
    filtersState.sortBy
  );

  return (
    <FiltersContext.Provider
      value={{ filtersState, filtersDispatch, sortedProducts }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => useContext(FiltersContext);
