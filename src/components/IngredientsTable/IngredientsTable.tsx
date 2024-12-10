import { IIngredient } from "../../redux/slices/recipeTypes";
import styles from "./IngredientsTable.module.scss";

const IngredientsTable = (props: { ingredients: IIngredient[] }) => {
  return (
    <div className={styles.detailsTableContianer}>
      <table>
        <thead>
          <tr>
            <th className={styles.heading}>Ingredient</th>
            <th className={styles.heading}>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {props.ingredients.map((item) => {
            return (
              <tr className={styles.row}>
                <td className={styles.cell}>{item.description}</td>
                <td className={styles.cell}>{item.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default IngredientsTable;
