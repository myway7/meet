import { createSlice } from "@reduxjs/toolkit";

export interface UserCurrentState {
  isLoggedIn: boolean;
  user: {
    id: string;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  } | undefined;
}

export const userInfo: UserCurrentState = {
  isLoggedIn: false,
  user: {
    id: "",
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  },
};

export  const userSlice = createSlice({
  name: "userState",
  initialState:userInfo,
  reducers: {
    logInUser: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logOutUser: (state) => {
      console.log("logOutUser")
      state.isLoggedIn = false;
      state.user = undefined;
    },
  },
});

export const { logInUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;

