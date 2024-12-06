import { IRecipe } from "../../redux/slices/recipeTypes";
import styles from "./RecipeCard.module.scss";

const RecipeCard = (props: { recipe: IRecipe }) => {
  const { recipe } = props;
  return (
    <div className={styles.recipeCard}>
      <div>
        <div className={styles.imageContainer}>
          <img src={recipe.image_url} className={styles.cardImage} />
        </div>
        <div className={styles.info}>
          <div className={styles.recipeTitle} title={recipe.title}>
            {recipe.title.length > 20
              ? recipe.title.slice(0, 20) + "..."
              : recipe.title}
          </div>
          <div className={styles.publisher}>by - {recipe.publisher}</div>
        </div>
      </div>
      <button className={styles.viewRecipeButton}>View Recipe</button>
    </div>
  );
};

export default RecipeCard;
