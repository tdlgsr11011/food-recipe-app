import { Routes, Route } from "react-router-dom";

import HomePage from "../../components/HomePage/HomePage";
import RecipeDetails from "../../components/RecipeDetails/RecipeDetails";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Favourites from "../../components/FavouritesPage/Favourites";

const RouteDefinitions = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RouteDefinitions;
