import { filterActions } from "../constants/filtersConstants";

export const filtersReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case filterActions.FILTER_BY_BRAND:
      return {
        ...state,
        brands: { ...state.brands, [payload]: !state.brands[payload] },
      };
    case filterActions.FILTER_BY_CATEGORY:
      return {
        ...state,
        categories: {
          ...state.categories,
          [payload]: !state.categories[payload],
        },
      };
    case filterActions.FILTER_BY_RATING:
      return {
        ...state,
        ratingLessThan: payload,
      };
    case filterActions.SORT_BY:
      return {
        ...state,
        sortBy: payload,
      };
    default:
      return state;
  }
};
