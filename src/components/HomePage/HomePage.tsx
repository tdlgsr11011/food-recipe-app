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
      return <div>Loading...</div>;
    } else {
      if (recipes.length === 0) {
        return (
          <div className={styles.homePage}>
            Nothing to show, search something
          </div>
        );
      } else {
        return <RecipesContainer />;
      }
    }
  }, [loading, recipes]);

  return <>{whatToShow}</>;
};

export default HomePage;
