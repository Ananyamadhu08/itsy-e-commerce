import axios from "axios";
import { productActions } from "../contexts/constants/productConstants";

export const getProducts = async (productDispatch) => {
  try {
    productDispatch({
      type: productActions.LOADING,
    });

    const {
      data: { products },
      status,
    } = await axios.get("api/products");

    if (status >= 200 && status < 300) {
      productDispatch({
        type: productActions.GET_PRODUCTS_SUCCESS,
        payload: products,
      });
    }
  } catch (error) {
    productDispatch({
      type: productActions.ERROR,
      payload: error,
    });
  }
};
