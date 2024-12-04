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
      return { error: true, recipes: [], message: err };
    }
  }
);
