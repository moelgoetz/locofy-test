import { FunctionComponent } from "react";
import StateUnchecked from "./StateUnchecked";
import SizeLargeTypeSolid from "./SizeLargeTypeSolid";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.noEffortInner, className].join(" ")}>
      <div className={styles.toppingsContentParent}>
        <div className={styles.toppingsContent}>
          <div className={styles.toppings}>
            <h2 className={styles.toppings1}>Toppings</h2>
          </div>
          <div className={styles.checkboxRowParent}>
            <div className={styles.checkboxRow}>
              <StateUnchecked />
              <div className={styles.nuts}>Nuts</div>
            </div>
            <div className={styles.checkboxRow}>
              <StateUnchecked />
              <div className={styles.fruit}>Fruit</div>
            </div>
            <div className={styles.checkboxRow}>
              <StateUnchecked />
              <a className={styles.candy}>Candy</a>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.clearButtonContentParent}>
            <div className={styles.clearButtonContent}>
              <a className={styles.clear}>Clear</a>
            </div>
            <SizeLargeTypeSolid iconLeft iconRight text="Submit" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;