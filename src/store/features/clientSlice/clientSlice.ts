import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Client, ClientState } from "../../../data/types";

const initialState: ClientState = {
  email: "",
  username: "",
  isLogged: false,
  drinks: [],
  address: "",
  orders: [],
  token: "",
};
const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    loginClient: (
      currentState,
      {
        payload: { address, drinks, orders, token, username, email },
      }: PayloadAction<Client>
    ) => ({
      ...currentState,
      isLogged: true,
      drinks,
      address,
      username,
      token,
      orders,
      email,
    }),

    logoutClient: () => ({ ...initialState }),
  },
});

export const clientReducer = clientSlice.reducer;
export const {
  loginClient: loginClientActionCreator,
  logoutClient: logoutClientActionCreator,
} = clientSlice.actions;
