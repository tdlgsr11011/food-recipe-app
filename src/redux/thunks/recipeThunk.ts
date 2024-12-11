import { createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const getRecipes = createAsyncThunk(
  "recipeSlice/getRecipes",
  async (payload: { recipeText: string }) => {
    const searchUrl = `${baseUrl}/api/v2/recipes?search=${payload.recipeText}&key=${apiKey}`;
    try {
      const req = await fetch(searchUrl);
      const response = await req.json();
      const recipes = response.data.recipes;
      return { error: false, recipes: recipes, message: "" };
    } catch (err) {
      return {
        error: true,
        recipes: [],
        message: typeof err == "string" ? err : "Something went wrong",
      };
    }
  }
);

export const getRecipeDetails = createAsyncThunk(
  "recipeSlice/getRecipeDetails",
  async (payload: { recipeId: string }) => {
    const searchUrl = `${baseUrl}/api/v2/recipes/${payload.recipeId}?key=${apiKey}`;
    try {
      const req = await fetch(searchUrl);
      const response = await req.json();
      const recipeDetails = response.data.recipe;
      return { recipeDetails, error: false, message: "" };
    } catch (e) {
      return {
        recipeDetails: {},
        error: true,
        message: typeof e === "string" ? e : "Something went wrong",
      };
    }
  }
);
