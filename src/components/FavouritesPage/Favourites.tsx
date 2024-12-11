import { useMemo } from "react";
import useTypedSelector from "../../redux/hooks/useTypedSelector";
import RecipesContainer from "../RecipesContainer/RecipesContainer";
import styles from "../HomePage/HomePage.module.scss";

const Favourites = () => {
  const { loading, favRecipes } = useTypedSelector(
    (rootState) => rootState.recipeState
  );

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
