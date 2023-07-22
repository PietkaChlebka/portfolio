import { Link as NavigationLink } from "react-router-dom";
import styles from "./style.module.scss";
import decorationImg from "../../../assets/Decoration.svg";

function HomeHeader() {
  return (
    <div className={styles.landingPageContainer}>
      <div className={styles.contentContainer}>
        <h1 className={styles.headerText}>
          Zacznij oddawać! <br />
          Oddaj niechciane rzeczy w zaufane ręce
        </h1>
        <img
          className={styles.decoration}
          src={decorationImg}
          alt="decoration"
        />
        <div className={styles.buttonContainer}>
          <button>
            <NavigationLink to="/login">
              Oddaj
              <br />
              rzeczy
            </NavigationLink>
          </button>
          <button>
            <NavigationLink to="/login">Zorganizuj zbiórkę</NavigationLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
