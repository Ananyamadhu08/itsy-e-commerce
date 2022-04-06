import { authActions } from "../constants/authConstants";

// encodedToken: null,
//   error: null,
//   loading: false,
//   user: {},

export const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case authActions.LOADING:
      return { ...state, loading: true };

    case authActions.ERROR:
      return { ...state, error: payload, loading: false };

    case authActions.SIGNUP_SUCCESS:
      return {
        ...state,
        user: payload.createdUser,
        encodedToken: payload.encodedToken,
        loading: false,
      };
    case authActions.LOGIN_SUCCESS:
      return {
        ...state,
        user: payload.foundUser,
        encodedToken: payload.encodedToken,
        loading: false,
      };

    default:
      return state;
  }
};
