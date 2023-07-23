import { Link as NavigationLink } from "react-router-dom";
import styles from "./styles.module.scss";
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
          <NavigationLink to="/login">
            <button>
              Oddaj
              <br />
              rzeczy
            </button>
          </NavigationLink>
          <NavigationLink to="/login">
            <button>Zorganizuj zbiórkę</button>
          </NavigationLink>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
