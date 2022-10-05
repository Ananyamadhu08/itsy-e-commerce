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
    case filterActions.CLEAR_FILTERS:
      return {
        ...state,
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
    default:
      return state;
  }
};
