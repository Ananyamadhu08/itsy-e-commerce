import { cartActions } from "../constants/cartConstants";

export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case cartActions.LOADING:
      return { ...state, loading: true };
    case cartActions.ERROR:
      return { ...state, error: payload, loading: false };
    case cartActions.GET_ALL_CART_ITEMS:
      return {
        ...state,
        cart: payload,
        loading: false,
      };
    case cartActions.ADD_ITEM_TO_CART:
      return {
        ...state,
        cart: payload,
        loading: false,
      };
    case cartActions.DELETE_ITEM_FROM_CART:
      return {
        ...state,
        cart: payload,
        loading: false,
      };
    case cartActions.UPDATE_CART_ITEM_QTY:
      return {
        ...state,
        cart: payload,
        loading: false,
      };
  }
};
