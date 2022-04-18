import { createContext, useContext, useEffect, useReducer } from "react";
import { getAllCartItems } from "../../utils/cartUtils";
import { cartReducer } from "../reducers/cartReducer";
import { useAuth } from "./AuthProvider";

const CartContext = createContext();

const intialState = {
  cart: [],
  loading: false,
  error: null,
};

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, intialState);

  useEffect(() => {
    let encodedToken = localStorage.getItem("itsy_JWT_token");

    console.log(encodedToken);
    if (encodedToken) {
      getAllCartItems(encodedToken, cartDispatch);
    }
  }, []);

  console.log(cartState);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
