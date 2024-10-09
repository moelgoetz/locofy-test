import { FunctionComponent } from "react";
import Placeholderplaceholder from "../components/Placeholderplaceholder";
import PhotoImageImage from "../components/PhotoImageImage";
import DropdownContainer from "../components/DropdownContainer";
import Actions from "../components/Actions";
import styles from "./V4InteractionsVariables.module.css";

const V4InteractionsVariables: FunctionComponent = () => {
  return (
    <div className={styles.v4InteractionsVariables}>
      <header className={styles.header}>
        <div className={styles.content}>
          <Placeholderplaceholder
            placeholderplaceholder2Width="24px"
            rectangleDivLeft="calc(50% - 10px)"
          />
        </div>
        <div className={styles.placeholderplaceholder2}>
          <div className={styles.placeholderplaceholder2Child} />
        </div>
        <h3 className={styles.atomicScoops}>Atomic Scoops</h3>
        <div className={styles.content1}>
          <div className={styles.placeholderplaceholder2Parent}>
            <Placeholderplaceholder
              placeholderplaceholder2Width="24px"
              rectangleDivLeft="calc(50% - 10px)"
            />
            <Placeholderplaceholder
              placeholderplaceholder2Width="24px"
              rectangleDivLeft="calc(50% - 10px)"
            />
          </div>
        </div>
      </header>
      <section className={styles.product}>
        <div className={styles.productDetails}>
          <div className={styles.cherryMeltSunday}>Cherry Melt Sunday</div>
          <div className={styles.imageBase}>
            <PhotoImageImage />
          </div>
        </div>
      </section>
      <section className={styles.customization}>
        <div className={styles.selections}>
          <div className={styles.selectiontype}>
            <div className={styles.selection}>Selection</div>
          </div>
        </div>
        <div className={styles.dropdownContainerParent}>
          <DropdownContainer />
          <Actions />
        </div>
      </section>
    </div>
  );
};

export default V4InteractionsVariables;
