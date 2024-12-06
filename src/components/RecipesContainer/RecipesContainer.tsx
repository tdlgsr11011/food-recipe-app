import useTypedSelector from "../../redux/hooks/useTypedSelector";
import RecipeCard from "../RecipeCard/RecipeCard";
import styles from "./RecipesContainer.module.scss";

const RecipesContainer = () => {
  const { recipes } = useTypedSelector((rootState) => rootState.recipeState);

  return (
    <div className={styles.recipeContainer}>
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
};

export default RecipesContainer;
