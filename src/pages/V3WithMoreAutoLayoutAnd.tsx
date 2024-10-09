import { FunctionComponent } from "react";
import Content from "../components/Content";
import Customization1 from "../components/Customization1";
import styles from "./V3WithMoreAutoLayoutAnd.module.css";

const V3WithMoreAutoLayoutAnd: FunctionComponent = () => {
  return (
    <div className={styles.v3WithMoreAutoLayoutAnd}>
      <main className={styles.autoLayout}>
        <section className={styles.verticalStack}>
          <Content />
          <Customization1 />
        </section>
        <section className={styles.selections}>
          <div className={styles.selectiontoppings}>
            <div className={styles.toppingOption}>
              <input className={styles.checkbox} type="checkbox" />
              <a className={styles.candy}>Candy</a>
            </div>
          </div>
        </section>
      </main>
      <div className={styles.actions}>
        <div className={styles.buttonRow}>
          <div className={styles.clearButton}>
            <a className={styles.clear}>Clear</a>
          </div>
          <button className={styles.buttonsubmit}>
            <div className={styles.label}>Submit</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default V3WithMoreAutoLayoutAnd;
