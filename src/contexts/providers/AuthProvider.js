import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";

const AuthContext = createContext();
const authIntState = {
  encodedToken: null,
  error: null,
  loading: false,
  user: {},
};

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authIntState);

  console.log(authState);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
