import axios from "axios";
import { wishlistActions } from "../contexts/constants/wishlistConstants";

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

export const addProductToWishilist = async (
  encodedToken,
  product,
  wishlistDispatch
) => {
  try {
    wishlistDispatch({ type: wishlistActions.LOADING });

    const {
      data: { wishlist },
      status,
    } = await axios.post(
      "api/user/wishlist",
      { product: product },
      {
        headers: { authorization: encodedToken },
      }
    );

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

export const deleteWishilistItem = async (
  encodedToken,
  productId,
  wishlistDispatch
) => {
  try {
    wishlistDispatch({ type: wishlistActions.LOADING });

    const {
      data: { wishlist },
      status,
    } = await axios.delete(`api/user/wishlist/${productId}`, {
      headers: { authorization: encodedToken },
    });

    if (status >= 200 && status < 300) {
      wishlistDispatch({
        type: wishlistActions.REMOVE_PRODUCT_FROM_WISHLIST,
        payload: wishlist,
      });
    }
  } catch (error) {
    wishlistDispatch({ type: wishlistActions.ERROR, payload: error });
  }
};
