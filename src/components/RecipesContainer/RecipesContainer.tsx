import useTypedSelector from "../../redux/hooks/useTypedSelector";
import RecipeCard from "../RecipeCard/RecipeCard";
import styles from "./RecipesContainer.module.scss";

interface IRecipeContainerProps {
  pageType: "home" | "favourites";
}

const RecipesContainer = (props: IRecipeContainerProps) => {
  const recipes = useTypedSelector((rootState) => {
    if (props.pageType == "home") {
      return rootState.recipeState.recipes;
    } else {
      return rootState.recipeState.favRecipes;
    }
  });

  return (
    <div className={styles.recipeContainer}>
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
};

export default RecipesContainer;
