import { wishlistActions } from "../constants/wishlistConstants";

export const wishlistReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case wishlistActions.LOADING:
      return { ...state, loading: true };

    case wishlistActions.ERROR:
      return { ...state, error: payload, loading: false };

    case wishlistActions.GET_ALL_WISHLIST:
      return {
        ...state,
        wishlist: payload,
        loading: false,
      };
    case wishlistActions.ADD_PRODUCT_TO_WISHLIST:
      return {
        ...state,
        wishlist: payload,
        loading: false,
      };
    case wishlistActions.REMOVE_PRODUCT_FROM_WISHLIST:
      return {
        ...state,
        wishlist: payload,
        loading: false,
      };
  }
};
