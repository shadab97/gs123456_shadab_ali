import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IStore } from "../../types";

export interface CounterState {
  stores: IStore[];
  col: { field: keyof IStore; editable?: boolean }[];
}

const initialState: CounterState = {
  stores: [
    {
      id: 1,
      storeCode: "ST035",
      storeName: "San Francisco Bay Trends",
      city: "San Francisco",
      state: "CA",
    },
    {
      id: 2,
      storeCode: "ST046",
      storeName: "Phoenix Sunwear",
      city: "Phoenix",
      state: "AZ",
    },
    {
      id: 3,
      storeCode: "ST064",
      storeName: "Dallas Ranch Supply",
      city: "Dallas",
      state: "TX",
    },
    {
      id: 4,
      storeCode: "ST066",
      storeName: "Atlanta Outfitters",
      city: "Atlanta",
      state: "GA",
    },
    {
      id: 5,
      storeCode: "ST073",
      storeName: "Nashville Melody Music Store",
      city: "Nashville",
      state: "TN",
    },
    {
      id: 6,
      storeCode: "ST074",
      storeName: "New York Empire Eats",
      city: "New York",
      state: "NY",
    },
    {
      id: 7,
      storeCode: "ST091",
      storeName: "Denver Peaks Outdoor",
      city: "Denver",
      state: "CO",
    },
    {
      id: 8,
      storeCode: "ST094",
      storeName: "Philadelphia Liberty Market",
      city: "Philadelphia",
      state: "PA",
    },
    {
      id: 9,
      storeCode: "ST097",
      storeName: "Boston Harbor Books",
      city: "Boston",
      state: "MA",
    },
    {
      id: 10,
      storeCode: "ST101",
      storeName: "Austin Vibe Co.",
      city: "Austin",
      state: "TX",
    },
    {
      id: 11,
      storeCode: "ST131",
      storeName: "Los Angeles Luxe",
      city: "Los Angeles",
      state: "CA",
    },
    {
      id: 12,
      storeCode: "ST150",
      storeName: "Houston Harvest Market",
      city: "Houston",
      state: "TX",
    },
    {
      id: 13,
      storeCode: "ST151",
      storeName: "Portland Evergreen Goods",
      city: "Portland",
      state: "OR",
    },
    {
      id: 14,
      storeCode: "ST156",
      storeName: "Chicago Charm Boutique",
      city: "Chicago",
      state: "IL",
    },
    {
      id: 15,
      storeCode: "ST163",
      storeName: "Las Vegas Neon Treasures",
      city: "Las Vegas",
      state: "NV",
    },
    {
      id: 16,
      storeCode: "ST175",
      storeName: "Seattle Skyline Goods",
      city: "Seattle",
      state: "WA",
    },
    {
      id: 17,
      storeCode: "ST176",
      storeName: "Miami Breeze Apparel",
      city: "Miami",
      state: "FL",
    },
    {
      id: 18,
      storeCode: "ST177",
      storeName: "San Diego Wave Surf Shop",
      city: "San Diego",
      state: "CA",
    },
    {
      id: 19,
      storeCode: "ST193",
      storeName: "Charlotte Queen’s Closet",
      city: "Charlotte",
      state: "NC",
    },
    {
      id: 20,
      storeCode: "ST208",
      storeName: "Detroit Motor Gear",
      city: "Detroit",
      state: "MI",
    },
  ],
  col: [
    { field: "id", editable: true },
    { field: "storeCode", editable: true },
    { field: "storeName", editable: true },
    { field: "city", editable: true },
    { field: "state", editable: true },
  ],
};

export const storeSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IStore>) => {
      state.stores = [...state.stores, action.payload];
    },
    updateStore: (state, action: PayloadAction<IStore>) => {
      state.stores = state.stores.map((store) =>
        store.id === action.payload.id ? action.payload : store
      );
    },
    removeStore: (state, action: PayloadAction<number>) => {
      state.stores = state.stores.filter(
        (store) => store.id !== action.payload
      );
    },
  },
});

export const { add, updateStore, removeStore } = storeSlice.actions;

export default storeSlice.reducer;
