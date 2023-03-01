import { Client, ClientState } from "../../../data/types";
import {
  clientReducer,
  loginClientActionCreator,
  logoutClientActionCreator,
} from "./clientSlice";

const initialState: ClientState = {
  username: "",
  isLogged: false,
  token: "",
  email: "",
  address: "",
  drinks: [],
  orders: [],
};

describe("Given a clientReducer", () => {
  describe("When it receives a client and an action to log in the client", () => {
    test("Then it should return the client with its isLogged property set as true", () => {
      const client: Client = {
        username: "Cris",
        token: "sdfgsfbb",
        email: "manolo",
        address: "calle manolo 2",
        drinks: [],
        orders: [],
      };
      const expectedClientState: ClientState = {
        username: "Cris",
        token: "sdfgsfbb",
        email: "manolo",
        address: "calle manolo 2",
        drinks: [],
        orders: [],
        isLogged: true,
      };
      const loginClientAction = loginClientActionCreator(client);

      const newClientState = clientReducer(initialState, loginClientAction);

      expect(newClientState).toStrictEqual(expectedClientState);
    });
  });

  describe("When it receives a client and an action to log out the client", () => {
    test("Then it should return the client to his initial state", () => {
      const logoutClientAction = logoutClientActionCreator();

      const newclientState = clientReducer(initialState, logoutClientAction);

      expect(newclientState).toStrictEqual(initialState);
    });
  });
});
