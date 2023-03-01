import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Client } from "../../../data/types";

const initialState: Client = {
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
        payload: { address, drinks, orders, token, username },
      }: PayloadAction<Client>
    ) => ({
      ...currentState,
      isLogged: true,
      drinks,
      address,
      username,
      token,
      orders,
    }),

    logoutClient: () => ({ ...initialState }),
  },
});

export const clientReducer = clientSlice.reducer;
export const { loginClient: loginClientActionCreator } = clientSlice.actions;
