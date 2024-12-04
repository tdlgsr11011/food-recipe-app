import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <SearchBar />
    </nav>
  );
};

export default NavBar;
