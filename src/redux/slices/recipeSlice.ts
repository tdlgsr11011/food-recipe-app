import { createSlice } from "@reduxjs/toolkit";
import { IRecipeState } from "./recipeTypes";
import * as recipeThunks from "../thunks/recipeThunk";

const initialState: IRecipeState = {
  loading: false,
  error: "",
  recipes: [],
  recipeDetails: {
    publisher: "",
    ingredients: [],
    source_url: "",
    image_url: "",
    title: "",
    servings: 0,
    cooking_time: 0,
    id: "",
  },
  favourites: [],
};

const recipeSlice = createSlice({
  name: "recipeSlice",
  initialState: initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(recipeThunks.getRecipes.pending, (state) => {
        state.loading = true;
      })
      .addCase(recipeThunks.getRecipes.rejected, (state) => {
        state.loading = false;
        state.error = "request rejected";
      })
      .addCase(recipeThunks.getRecipes.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.error) {
          state.error = action.payload.message;
        } else {
          state.recipes = action.payload.recipes;
        }
      })
      .addCase(recipeThunks.getRecipeDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(recipeThunks.getRecipeDetails.rejected, (state) => {
        state.loading = false;
        state.error = "request rejected";
      })
      .addCase(recipeThunks.getRecipeDetails.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.error) {
          state.error = action.payload.message;
        } else {
          state.recipeDetails = action.payload.recipeDetails;
        }
      });
  },
});

export const recipeActions = { ...recipeSlice.actions, ...recipeThunks };
export default recipeSlice.reducer;
