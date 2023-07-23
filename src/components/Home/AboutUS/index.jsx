import styles from "./styles.module.scss";
import decorationImg from "../../../assets/Decoration.svg";
import signature from "../../../assets/Signature.svg";

function AboutUs() {
  return (
    <section className={styles.aboutUsSection} name="aboutUs">
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h3 className={styles.header}>O nas</h3>
          <img src={decorationImg} className={styles.decoration} />
          <p>
            Nori grape silver beet broccoli kombu beet greens fava bean potato
            quandong celery. Bunya nuts black-eyed pea prairie turnip leek
            lentil turnip greens parsnip.
          </p>
          <img src={signature} className={styles.signature} />
        </div>
      </div>
      <div className={styles.people} />
    </section>
  );
}

export default AboutUs;
