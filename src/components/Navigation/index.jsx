import { Link as NavigationLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import styles from "./styles.module.scss";

function Navigation() {
  return (
    <nav className={styles.navigationContainer}>
      <div className={styles.loginBtnContainer}>
        <button className={styles.buttonPrimary}>
          <NavigationLink to="/login">Zaloguj</NavigationLink>
        </button>
        <button className={styles.buttonPrimary}>
          <NavigationLink to="/login">Załóż konto</NavigationLink>
        </button>
      </div>
      <ul className={styles.menuContainer}>
        <li className={styles.menuElement}>
          <ScrollLink to="">Start</ScrollLink>
        </li>
        <li className={styles.menuElement}>
          <ScrollLink to="simpleSteps" smooth>
            O co chodzi?
          </ScrollLink>
        </li>
        <li className={styles.menuElement}>
          <ScrollLink to="aboutUs" smooth>
            O nas
          </ScrollLink>
        </li>
        <li className={styles.menuElement}>
          <ScrollLink to="whoWeHelp" smooth>
            Fundacja i organizacje
          </ScrollLink>
        </li>
        <li className={styles.menuElement}>
          <ScrollLink to="footer">Kontakt</ScrollLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
