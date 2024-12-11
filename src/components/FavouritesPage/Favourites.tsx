import { useEffect, useMemo } from "react";
import useTypedSelector from "../../redux/hooks/useTypedSelector";
import RecipesContainer from "../RecipesContainer/RecipesContainer";
import styles from "../HomePage/HomePage.module.scss";
import { useDispatch } from "react-redux";
import { recipeActions } from "../../redux/slices/recipeSlice";

const Favourites = () => {
  const { loading, favRecipes, favourites } = useTypedSelector(
    (rootState) => rootState.recipeState
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(recipeActions.getFavRecipes({ favourites: favourites }));
  }, [favourites]);

  const whatToShow = useMemo(() => {
    if (loading) {
      return <h2 className={styles.homePage}>Loading...</h2>;
    } else {
      if (favRecipes.length) {
        return <RecipesContainer pageType="favourites" />;
      } else {
        return (
          <h2 className={styles.homePage}>
            Nothing to show, add few items to favourites
          </h2>
        );
      }
    }
  }, [loading, favRecipes]);

  return <>{whatToShow}</>;
};

export default Favourites;
