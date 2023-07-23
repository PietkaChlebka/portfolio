import styles from "./styles.module.scss";
import decorationImg from "../../../assets/Decoration.svg";
import tshirt from "../../../assets/Icon-1.svg";
import bag from "../../../assets/Icon-2.svg";
import search from "../../../assets/Icon-3.svg";
import refresh from "../../../assets/Icon-4.svg";
import { Link as NavigationLink } from "react-router-dom";
import { Button } from "react-scroll";

function SimpleSteps() {
  return (
    <section className={styles.stepsContainer}>
      <div className={styles.header}>
        <div className={styles.headerSection}>
          <h3>Wystarczą 4 proste kroki</h3>
          <img src={decorationImg} />
        </div>
      </div>

      <div className={styles.cards}>
        <div className={styles.iconsContainer}>
          <img src={tshirt} />
          <p className={styles.elementHeader}>Wybierz rzeczy</p>
          <hr />
          <p className={styles.elementContent}>
            Ubrania, zabawki, sprzęt i inne
          </p>
        </div>

        <div className={styles.iconsContainer}>
          <img src={bag} />
          <p className={styles.elementHeader}>Spakuj je</p>
          <hr />
          <p className={styles.elementContent}>Skorzystaj z worków na śmieci</p>
        </div>

        <div className={styles.iconsContainer}>
          <img src={search} />
          <p className={styles.elementHeader}>Zdecyduj komu chcesz pomóc</p>
          <hr />
          <p className={styles.elementContent}>Wybierz zaufane miejsce</p>
        </div>

        <div className={styles.iconsContainer}>
          <img src={refresh} />
          <p className={styles.elementHeader}>Zamów kuriera</p>
          <hr />
          <p className={styles.elementContent}>
            Kurier przyjedzie w dogodnym terminie
          </p>
        </div>
      </div>

      <div className={styles.btnSection}>
        <div className={styles.btnContainer}>
          <NavigationLink to="/login">
            <button>
              Oddaj
              <br />
              rzeczy
            </button>
          </NavigationLink>
        </div>
      </div>
    </section>
  );
}

export default SimpleSteps;
