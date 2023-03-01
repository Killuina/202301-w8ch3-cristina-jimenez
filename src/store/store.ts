import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { clientReducer } from "./features/clientSlice/clientSlice";
import { drinksReducer } from "./features/drinksSlice/drinksSlice";

export const store = configureStore({
  reducer: { client: clientReducer, drinks: drinksReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
