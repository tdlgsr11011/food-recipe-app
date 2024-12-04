export interface IRecipe {
  publisher: string;
  image_url: string;
  title: string;
  id: string;
}

export interface IIngredient {
  quantity: number;
  unit: string;
  description: string;
}

export interface IRecipeDetails {
  publisher: string;
  ingredients: IIngredient[];
  source_url: string;
  image_url: string;
  title: string;
  servings: number;
  cooking_time: number;
  id: string;
}

export interface IRecipeState {
  loading: boolean;
  error: string;
  recipes: IRecipe[];
  recipeDetails: IRecipeDetails;
}
