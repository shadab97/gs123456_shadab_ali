import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./features/store/storeSlice";
import skuReducer from "./features/sku/skuSlice";

export const store = configureStore({
  reducer: {
    store: storeReducer,
    sku: skuReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
