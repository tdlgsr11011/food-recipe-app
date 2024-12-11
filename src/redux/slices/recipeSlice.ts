import { createSlice } from "@reduxjs/toolkit";
import { IRecipeState } from "./recipeTypes";
import * as recipeThunks from "../thunks/recipeThunk";

const initialState: IRecipeState = {
  loading: false,
  error: "",
  recipes: [],
  favRecipes: [],
  favourites: [],
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
};

const recipeSlice = createSlice({
  name: "recipeSlice",
  initialState: initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    addToFavourites: (state, action) => {
      const alreadyPresent =
        state.favourites.find((item) => item == action.payload) != undefined;
      if (!alreadyPresent) {
        state.favourites = [...state.favourites, action.payload];
      }
    },
    removeFromFavourites: (state, action) => {
      state.favourites = state.favourites.filter(
        (item) => item != action.payload
      );
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
      })
      .addCase(recipeThunks.getFavRecipes.pending, (state) => {
        state.loading = true;
      })
      .addCase(recipeThunks.getFavRecipes.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.error) {
          state.error = action.payload.message;
        } else {
          state.favRecipes = action.payload.recipes;
        }
      })
      .addCase(recipeThunks.getFavRecipes.rejected, (state) => {
        state.loading = false;
        state.error = "Request rejected";
      });
  },
});

export const recipeActions = { ...recipeSlice.actions, ...recipeThunks };
export default recipeSlice.reducer;
