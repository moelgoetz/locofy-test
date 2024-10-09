import { FunctionComponent } from "react";
import SizeDefault from "./SizeDefault";
import StateUnchecked from "./StateUnchecked";
import SizeLargeTypeSolid from "./SizeLargeTypeSolid";
import styles from "./Customization.module.css";

export type CustomizationType = {
  className?: string;
};

const Customization: FunctionComponent<CustomizationType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.customization, className].join(" ")}>
      <div className={styles.selection}>Selection</div>
      <div className={styles.dropdownContainer}>
        <SizeDefault
          text="Select"
          dropdownAlignSelf="unset"
          dropdownWidth="371px"
          dropdownHeight="48px"
          textHeight="24px"
          textWidth="43px"
          textDisplay="inline-block"
        />
        <div className={styles.toppingsParent}>
          <h2 className={styles.toppings}>Toppings</h2>
          <footer className={styles.toppingsContainer}>
            <div className={styles.toppingsOptions}>
              <div className={styles.checkboxRowParent}>
                <div className={styles.checkboxRow}>
                  <div className={styles.checkboxOptions}>
                    <StateUnchecked />
                    <StateUnchecked />
                    <StateUnchecked />
                  </div>
                </div>
                <div className={styles.toppingNames}>
                  <div className={styles.nuts}>Nuts</div>
                  <div className={styles.fruit}>Fruit</div>
                  <a className={styles.candy}>Candy</a>
                </div>
              </div>
            </div>
            <div className={styles.clearButton}>
              <div className={styles.clearButtonContainer}>
                <a className={styles.clear}>Clear</a>
              </div>
              <SizeLargeTypeSolid
                iconLeft={false}
                iconRight={false}
                text="Submit"
                buttonPadding="12px 16px"
                buttonFlex="unset"
                buttonHeight="52px"
                buttonWidth="88px"
                labelHeight="28px"
                labelWidth="57px"
                labelDisplay="inline-block"
              />
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Customization;
