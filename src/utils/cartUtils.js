import axios from "axios";
import { cartActions } from "../contexts/constants/cartConstants";

export const getAllCartItems = async (encodedToken, cartDispatch) => {
  try {
    cartDispatch({ type: cartActions.LOADING });
    console.log(",,,,,,,");

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
