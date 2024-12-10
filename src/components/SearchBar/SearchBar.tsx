import { useEffect, useState } from "react";
import styles from "./SearchBar.module.scss";
import { useDispatch } from "react-redux";
import { recipeActions } from "../../redux/slices/recipeSlice";
import useTypedSelector from "../../redux/hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [recipeText, setRecipeText] = useState("");

  const error = useTypedSelector((rootState) => rootState.recipeState.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (error.length > 0) {
      const timer = setTimeout(() => {
        dispatch(recipeActions.setError(""));
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [error, dispatch]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(recipeActions.getRecipes({ recipeText: recipeText }));
    navigate("/");
  };

  const textChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecipeText(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="eg. pizza"
        value={recipeText}
        onChange={textChangeHandler}
        className={styles.inputBar}
      />
    </form>
  );
};

export default SearchBar;
