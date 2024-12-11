import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <h2 className={styles.appHeading}>Food Recipe App</h2>
      <div className={styles.searchBarContainer}>
        <SearchBar />
      </div>
      <div className={styles.links}>
        <Link to={"/"} className={styles.linkItem}>
          home
        </Link>
        <Link to={"/favourites"} className={styles.linkItem}>
          favourites
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
