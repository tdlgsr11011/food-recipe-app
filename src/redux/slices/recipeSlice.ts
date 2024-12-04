import { createSlice } from "@reduxjs/toolkit";

interface IRecipeState {
  loading: boolean;
  error: string;
}

const initialState: IRecipeState = {
  loading: false,
  error: "",
};

const recipeSlice = createSlice({
  name: "recipeSlice",
  initialState: initialState,
  reducers: {},
});

export const recipeActions = recipeSlice.actions;
export default recipeSlice.reducer;
