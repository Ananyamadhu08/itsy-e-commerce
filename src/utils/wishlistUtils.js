import axios from "axios";

export const getWishlistItems = async (encodedToken, wishlistDispatch) => {
  try {
    wishlistDispatch({ type: wishlistActions.LOADING });

    const {
      data: { wishlist },
      status,
    } = await axios.get("api/user/wishlist", {
      headers: { authorization: encodedToken },
    });

    if (status >= 200 && status < 300) {
      wishlistDispatch({
        type: wishlistActions.GET_ALL_WISHLIST,
        payload: wishlist,
      });
    }
  } catch (error) {
    wishlistDispatch({ type: wishlistActions.ERROR, payload: error });
  }
};
