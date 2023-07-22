import styles from "./styles.module.scss";

function ThreeColumns() {
  return (
    <div className={styles.columnsContainer}>
      <div className={styles.columnsElement}>
        <h3>10</h3>
        <p className={styles.columnHeader}>Oddanych worków</p>
        <p className={styles.columnContent}>
          Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
          a elit viverra elementuma. Aliquam erat volutpat.
        </p>
      </div>
      <div className={styles.columnsElement}>
        <h3>5</h3>
        <p className={styles.columnHeader}>Wspartych organizacji</p>
        <p className={styles.columnContent}>
          Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
          a elit viverra elementuma. Aliquam erat volutpat.
        </p>
      </div>
      <div className={styles.columnsElement}>
        <h3>7</h3>
        <p className={styles.columnHeader}>Zorganizowanych zbiórek</p>
        <p className={styles.columnContent}>
          Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
          a elit viverra elementuma. Aliquam erat volutpat.
        </p>
      </div>
    </div>
  );
}

export default ThreeColumns;
