import axios from "axios";
import { useNavigate } from "react-router-dom";
import { authActions } from "../contexts/constants/authConstants";

export const signupUser = async (userData, authDispatch, navigateCallback) => {
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

      navigateCallback("/");
    }
  } catch (error) {
    authDispatch({
      type: authActions.ERROR,
      payload: error,
    });
  }
};

export const loginUser = async (userData, authDispatch, navigateCallback) => {
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

      navigateCallback("/");
    }
  } catch (error) {
    authDispatch({
      type: authActions.ERROR,
      payload: error,
    });
  }
};
