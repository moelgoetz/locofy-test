import { FunctionComponent } from "react";
import ArrowschevronDownSmIcon from "./ArrowschevronDownSmIcon";
import styles from "./Customization1.module.css";

export type Customization1Type = {
  className?: string;
};

const Customization1: FunctionComponent<Customization1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.customization, className].join(" ")}>
      <div className={styles.toppingOptions}>
        <div className={styles.selectiontype}>
          <div className={styles.selection}>Selection</div>
          <div className={styles.dropdown}>
            <div className={styles.text}>Select</div>
            <ArrowschevronDownSmIcon
              arrowschevronDownSmIconPosition="relative"
              arrowschevronDownSmIconMargin="unset"
              arrowschevronDownSmIconTop="unset"
              arrowschevronDownSmIconRight="unset"
            />
          </div>
        </div>
        <div className={styles.subheading}>
          <h2 className={styles.toppings}>Toppings</h2>
        </div>
        <div className={styles.checkboxRow}>
          <input className={styles.checkboxPair} type="checkbox" />
          <div className={styles.nuts}>Nuts</div>
        </div>
        <div className={styles.checkboxRow}>
          <input className={styles.checkboxPair} type="checkbox" />
          <div className={styles.fruit}>Fruit</div>
        </div>
      </div>
    </div>
  );
};

export default Customization1;
