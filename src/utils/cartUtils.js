import axios from "axios";
import { cartActions } from "../contexts/constants/cartConstants";

export const getAllCartItems = async (encodedToken, cartDispatch) => {
  try {
    cartDispatch({ type: cartActions.LOADING });

    const {
      data: { cart },
      status,
    } = await axios.get("api/user/cart", {
      headers: { authorization: encodedToken },
    });

    if (status >= 200 && status < 300) {
      cartDispatch({
        type: cartActions.GET_ALL_CART_ITEMS,
        payload: cart,
      });
    }
  } catch (error) {
    cartDispatch({ type: cartActions.ERROR, payload: error });
  }
};

export const addCartItem = async (encodedToken, product, cartDispatch) => {
  try {
    cartDispatch({ type: cartActions.LOADING });

    const {
      data: { cart },
      status,
    } = await axios.post(
      "api/user/cart",
      { product: product },
      {
        headers: { authorization: encodedToken },
      }
    );

    if (status >= 200 && status < 300) {
      cartDispatch({
        type: cartActions.ADD_ITEM_TO_CART,
        payload: cart,
      });
    }
  } catch (error) {
    cartDispatch({ type: cartActions.ERROR, payload: error });
  }
};

export const deleteCartItem = async (encodedToken, productId, cartDispatch) => {
  try {
    cartDispatch({ type: cartActions.LOADING });

    const {
      data: { cart },
      status,
    } = await axios.delete(`api/user/cart/${productId}`, {
      headers: { authorization: encodedToken },
    });

    if (status >= 200 && status < 300) {
      cartDispatch({
        type: cartActions.DELETE_ITEM_FROM_CART,
        payload: cart,
      });
    }
  } catch (error) {
    cartDispatch({ type: cartActions.ERROR, payload: error });
  }
};
