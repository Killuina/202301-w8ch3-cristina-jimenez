import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Drinks } from "../../../data/types";

const initialState: Drinks = [];

const drinksSlice = createSlice({
  name: "drinks",
  initialState,
  reducers: {
    loadDrinks: (currentDrinks, { payload }: PayloadAction<Drinks>) => [
      ...payload,
    ],
    updateDrinksPrice: (currentDrinks, { payload }: PayloadAction<number>) =>
      currentDrinks.map((drink) => ({ ...drink, price: payload })),
    setIsAvailable: (currentDrinks, { payload }: PayloadAction<number>) => {
      currentDrinks
        .filter((drink) => drink.id === payload)
        .map((drink) => ({ ...drink, isAvailable: true }));
    },
  },
});

export const drinksReducer = drinksSlice.reducer;
export const {
  loadDrinks: loadDrinksActionCreator,
  updateDrinksPrice: updateDrinksActionCreator,
  setIsAvailable: setIsAvailableActionCreator,
} = drinksSlice.actions;
