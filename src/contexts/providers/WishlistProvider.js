import { createContext, useContext, useReducer } from "react";

const WishlistContext = createContext();

const intialState = {
  wishlist: [],
  error: null,
  loading: false,
};

export const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(
    intialState,
    wishlistReducer
  );

  return (
    <WishlistContext.Provider value={(wishlistState, wishlistDispatch)}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext();
