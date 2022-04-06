import { createContext, useContext, useEffect, useReducer } from "react";
import { getProducts } from "../../utils/productUtils";
import { productReducer } from "../reducers/productReducer";

const ProductContext = createContext();

const intialState = {
  loading: false,
  error: null,
  products: [],
};

export const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    productReducer,
    intialState
  );

  console.log(productState);

  useEffect(() => {
    getProducts(productDispatch);
  }, []);

  return (
    <ProductContext.Provider value={(productState, productDispatch)}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
