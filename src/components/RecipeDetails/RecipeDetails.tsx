import { useParams } from "react-router-dom";
import styles from "./RecipeDetails.module.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { recipeActions } from "../../redux/slices/recipeSlice";
import useTypedSelector from "../../redux/hooks/useTypedSelector";
import IngredientsTable from "../IngredientsTable/IngredientsTable";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const { recipeDetails } = useTypedSelector(
    (rootState) => rootState.recipeState
  );

  useEffect(() => {
    dispatch(recipeActions.getRecipeDetails({ recipeId: recipeId }));
  }, [recipeId]);

  return (
    <div className={styles.mainContainer}>
      <div>
        <div className={styles.infoContainer}>
          <div className={styles.title}>{recipeDetails.title}</div>
          <div>by {recipeDetails.publisher}</div>
          <div>{recipeDetails.cooking_time} minutes</div>
        </div>
        <div className={styles.recipeDetails}>
          <div className={styles.imageContainer}>
            <img src={recipeDetails.image_url} />
          </div>
          <div className={styles.ingredientsContiner}>
            <IngredientsTable ingredients={recipeDetails.ingredients} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
