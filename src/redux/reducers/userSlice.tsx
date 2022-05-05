import { createSlice } from "@reduxjs/toolkit";
import actionTypes from "../actions/actionTypes";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    userInfo: null,
  },
  reducers: {
    loginUser: (state, action) => {
      switch (action.type) {
        case actionTypes.ADD_USER_SUCCESS:
          return {
            ...state,
            isLoggedIn: true,
          };

        case actionTypes.LOGIN_USER_SUCCESS:
          return {
            ...state,
            isLoggedIn: true,
            userInfo: action.payload.userInfo,
          };

        case actionTypes.LOGIN_USER_FAIL:
          return {
            ...state,
            isLoggedIn: false,
            userInfo: null,
          };
        case actionTypes.PROCESS_LOGOUT:
          return {
            ...state,
            isLoggedIn: false,
            userInfo: null,
          };

        default:
          break;
      }
    },
  },
});

export const { loginUser } = userSlice.actions;

export default userSlice.reducer;
