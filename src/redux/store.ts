import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./slices/recipeSlice";

const store = configureStore({
  reducer: {
    recipeState: recipeSlice,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
export default store;
