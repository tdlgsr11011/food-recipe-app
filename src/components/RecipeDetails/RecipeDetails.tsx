import { useParams } from "react-router-dom";
import styles from "./RecipeDetails.module.scss";
import homeStyles from "../HomePage/HomePage.module.scss";
import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { recipeActions } from "../../redux/slices/recipeSlice";
import useTypedSelector from "../../redux/hooks/useTypedSelector";
import IngredientsTable from "../IngredientsTable/IngredientsTable";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const { recipeDetails, loading, favRecipes } = useTypedSelector(
    (rootState) => rootState.recipeState
  );

  useEffect(() => {
    dispatch(recipeActions.getRecipeDetails({ recipeId: recipeId }));
  }, [recipeId]);

  const isFavorite = useMemo(() => {
    return favRecipes.find((item) => item.id == recipeId);
  }, [favRecipes, recipeId]);

  const addOrRemoveFromFavourites = () => {
    const { publisher, image_url, title, id } = recipeDetails;
    if (isFavorite) {
      dispatch(
        recipeActions.removeFromFavourites({ publisher, image_url, title, id })
      );
    } else {
      dispatch(
        recipeActions.addToFavourites({ publisher, image_url, title, id })
      );
    }
  };

  return loading ? (
    <h2 className={homeStyles.homePage}>Loading...</h2>
  ) : (
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
        <div className={styles.buttonContainer}>
          <button
            className={styles.addToFavouriteBtn}
            onClick={addOrRemoveFromFavourites}
          >
            {isFavorite ? "Remove from favourites" : "Add to favourites"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
