import { useState } from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  const [recipeText, setRecipeText] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const textChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecipeText(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="eg. fried rice"
        value={recipeText}
        onChange={textChangeHandler}
        className={styles.inputBar}
      />
    </form>
  );
};

export default SearchBar;
