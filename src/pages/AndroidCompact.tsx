import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import TypeImageIconSubtleOff from "../components/TypeImageIconSubtleOff";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./AndroidCompact.module.css";

const AndroidCompact: FunctionComponent = () => {
  return (
    <div className={styles.androidCompact1}>
      <section className={styles.frameParent}>
        <FrameComponent />
        <div className={styles.frameWrapper}>
          <div className={styles.cherryMeltSundayParent}>
            <h2 className={styles.cherryMeltSunday}>Cherry Melt Sunday</h2>
            <div className={styles.imageBaseWrapper}>
              <TypeImageIconSubtleOff />
            </div>
          </div>
        </div>
        <FrameComponent1 />
      </section>
      <FrameComponent2 />
    </div>
  );
};

export default AndroidCompact;
