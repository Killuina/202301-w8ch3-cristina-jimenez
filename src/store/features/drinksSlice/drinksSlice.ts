import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Drinks } from "../../../data/types";

const initialState: Drinks = [
  {
    id: 1,
    name: "Coca-cola",
    brand: "Coca-Cola company",
    description: "Coca-cola de toda la vida chico",
    price: 0.8,
    isAvailable: false,
  },
  {
    id: 2,
    name: "Fanta de Naranja",
    brand: "Coca-Cola company",
    description: "Fanta de toda la vida chico",
    price: 0.82,
    isAvailable: true,
  },
];

const drinksSlice = createSlice({
  name: "drinks",
  initialState,
  reducers: {
    loadDrinks: (currentDrinks, { payload }: PayloadAction<Drinks>) => [
      ...payload,
    ],
    updateDrinksPrice: (currentDrinks, { payload }: PayloadAction<number>) =>
      currentDrinks.map((drink) => ({ ...drink, price: payload })),
    setIsAvailable: (currentDrinks, { payload }: PayloadAction<number>) =>
      currentDrinks.map((drink) => ({
        ...drink,
        isAvailable: drink.id === payload ? true : drink.isAvailable,
      })),
  },
});

export const drinksReducer = drinksSlice.reducer;
export const {
  loadDrinks: loadDrinksActionCreator,
  updateDrinksPrice: updateDrinksActionCreator,
  setIsAvailable: setIsAvailableActionCreator,
} = drinksSlice.actions;
