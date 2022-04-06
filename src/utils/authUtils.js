import axios from "axios";
import { authActions } from "../contexts/constants/authConstants";

export const signupUser = async (userData, authDispatch) => {
  try {
    authDispatch({ type: authActions.LOADING });

    const {
      data: { createdUser, encodedToken },
      status,
    } = await axios.post("api/auth/signup", userData);

    if (status >= 200 && status < 300) {
      localStorage.setItem("itsy_JWT_token", encodedToken);

      authDispatch({
        type: authActions.SIGNUP_SUCCESS,
        payload: { createdUser, encodedToken },
      });
    }
  } catch (error) {
    authDispatch({
      type: authActions.ERROR,
      payload: error,
    });
  }
};

export const loginUser = async (userData, authDispatch) => {
  try {
    authDispatch({ type: authActions.LOADING });

    const {
      data: { foundUser, encodedToken },
      status,
    } = await axios.post("api/auth/login", userData);

    if (status >= 200 && status < 300) {
      localStorage.setItem("itsy_JWT_token", encodedToken);

      authDispatch({
        type: authActions.LOGIN_SUCCESS,
        payload: { foundUser, encodedToken },
      });
    }
  } catch (error) {
    authDispatch({
      type: authActions.ERROR,
      payload: error,
    });
  }
};
