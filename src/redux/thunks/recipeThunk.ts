import { createAsyncThunk } from "@reduxjs/toolkit";
import { IRecipe } from "../slices/recipeTypes";

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

export const getFavRecipes = createAsyncThunk(
  "recipeSlice/getFavRecipes",
  async (payload: { favourites: string[] }) => {
    try {
      const promiseArr = payload.favourites.map((recipeId) => {
        const searchUrl = `${baseUrl}/api/v2/recipes/${recipeId}?key=${apiKey}`;
        return fetch(searchUrl);
      });

      const reqArr = await Promise.all(promiseArr);
      const resArr = await Promise.all(reqArr.map((req) => req.json()));
      const recipes: IRecipe[] = resArr.map((item) => {
        const { publisher, image_url, title, id } = item.data.recipe;
        return { publisher, image_url, title, id };
      });

      return { recipes: recipes, error: false, message: "" };
    } catch (e) {
      return {
        recipes: [],
        error: true,
        message: typeof e === "string" ? e : "Something went wrong",
      };
    }
  }
);
