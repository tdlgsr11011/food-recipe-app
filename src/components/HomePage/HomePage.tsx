import RecipesContainer from "../RecipesContainer/RecipesContainer";
import useTypedSelector from "../../redux/hooks/useTypedSelector";
import { useMemo } from "react";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  const { recipes, loading } = useTypedSelector(
    (rootState) => rootState.recipeState
  );

  const whatToShow = useMemo(() => {
    if (loading) {
      return <h2 className={styles.homePage}>Loading...</h2>;
    } else {
      if (recipes.length === 0) {
        return (
          <h2 className={styles.homePage}>Nothing to show, search something</h2>
        );
      } else {
        return <RecipesContainer pageType={"home"} />;
      }
    }
  }, [loading, recipes]);

  return <>{whatToShow}</>;
};

export default HomePage;
