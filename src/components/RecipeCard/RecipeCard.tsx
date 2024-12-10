import { IRecipe } from "../../redux/slices/recipeTypes";
import styles from "./RecipeCard.module.scss";
import { Link } from "react-router-dom";

const RecipeCard = (props: { recipe: IRecipe }) => {
  const { recipe } = props;
  return (
    <Link className={styles.recipeCard} to={`/recipes/${recipe.id}`}>
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
    </Link>
  );
};

export default RecipeCard;
