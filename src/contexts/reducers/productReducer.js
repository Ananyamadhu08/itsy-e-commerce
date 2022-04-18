import { productActions } from "../constants/productConstants";

export const productReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case productActions.LOADING:
      return { ...state, loading: true };

    case productActions.ERROR:
      return { ...state, error: payload, loading: false };

    case productActions.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload,
      };

    default:
      return state;
  }
};
