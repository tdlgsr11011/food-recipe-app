import { Routes, Route } from "react-router-dom";

import HomePage from "../../components/HomePage/HomePage";
import RecipeDetails from "../../components/RecipeDetails/RecipeDetails";
import ErrorPage from "../../components/ErrorPage/ErrorPage";

const RouteDefinitions = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RouteDefinitions;
