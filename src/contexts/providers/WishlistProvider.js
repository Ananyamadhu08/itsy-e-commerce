import { createContext, useContext, useReducer, useEffect } from "react";
import { getWishlistItems } from "../../utils/wishlistUtils";
import { wishlistReducer } from "../reducers/wishlistReducer";

const WishlistContext = createContext();

const intialState = {
  wishlist: [],
  error: null,
  loading: false,
};

export const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    intialState
  );

  useEffect(() => {
    let encodedToken = localStorage.getItem("itsy_JWT_token");

    getWishlistItems(encodedToken, wishlistDispatch);
  }, []);

  console.log(wishlistState);

  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
