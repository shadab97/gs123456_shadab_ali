import { SKU } from "../../data/index";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ISku } from "../../types";

export interface CounterState {
  sku: ISku[];
  col: { field: keyof ISku; editable?: boolean }[];
}

const initialState: CounterState = {
  sku: SKU,
  col: [
    { field: "id", editable: true },
    { field: "label", editable: true },
    { field: "class", editable: true },
    { field: "department", editable: true },
    { field: "price", editable: true },
    { field: "cost", editable: true },
  ],
};

export const skuSlice = createSlice({
  name: "sku",
  initialState,
  reducers: {
    addSku: (state, action: PayloadAction<ISku>) => {
      state.sku = [...state.sku, action.payload];
    },
    updateSku: (state, action: PayloadAction<ISku>) => {
      state.sku = state.sku.map((store) =>
        store.id === action.payload.id ? action.payload : store
      );
    },
    removeSku: (state, action: PayloadAction<string>) => {
      state.sku = state.sku.filter((s) => s.id !== String(action.payload));
    },
  },
});

export const { addSku, updateSku, removeSku } = skuSlice.actions;

export default skuSlice.reducer;
