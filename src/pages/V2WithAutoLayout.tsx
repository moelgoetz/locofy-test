import { FunctionComponent } from "react";
import Placeholderplaceholder from "../components/Placeholderplaceholder";
import TypeImageIconSubtleOff from "../components/TypeImageIconSubtleOff";
import Customization from "../components/Customization";
import styles from "./V2WithAutoLayout.module.css";

const V2WithAutoLayout: FunctionComponent = () => {
  return (
    <div className={styles.v2WithAutoLayout}>
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
        <div className={styles.atomicScoops}>Atomic Scoops</div>
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
      <section className={styles.menu}>
        <div className={styles.sundae}>
          <h2 className={styles.cherryMeltSunday}>Cherry Melt Sunday</h2>
          <TypeImageIconSubtleOff
            typeImageIconSubtleOffImage="/image-base1.svg"
            imageBaseIconBorder="unset"
            imageBaseIconBackgroundColor="unset"
            imageBaseIconHeight="unset"
            imageBaseIconWidth="unset"
            imageBaseIconOutline="unset"
            imageBaseIconFlex="unset"
            imageBaseIconAlignSelf="stretch"
            imageBaseIconMaxHeight="100%"
          />
        </div>
      </section>
      <Customization />
    </div>
  );
};

export default V2WithAutoLayout;
