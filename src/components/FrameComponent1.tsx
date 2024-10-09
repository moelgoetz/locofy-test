import { FunctionComponent } from "react";
import SizeDefault from "./SizeDefault";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.selectionWrapper}>
          <div className={styles.selection}>Selection</div>
        </div>
        <SizeDefault text="Select" />
      </div>
    </div>
  );
};

export default FrameComponent1;
