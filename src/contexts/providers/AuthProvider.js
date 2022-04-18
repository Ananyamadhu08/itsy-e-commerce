import { createContext, useContext, useEffect, useReducer } from "react";
import { authActions } from "../constants/authConstants";
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

  useEffect(() => {
    let encodedToken = localStorage.getItem("itsy_JWT_token");

    if (encodedToken) {
      authDispatch({
        type: authActions.LOGIN_SUCCESS,
        payload: { user: {}, encodedToken },
      });
    }
  }, []);

  // console.log(authState, "authState");

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
