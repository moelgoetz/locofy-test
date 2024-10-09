import { FunctionComponent } from "react";
import Type from "./Type";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.mobileNavWrapper, className].join(" ")}>
      <Type icon2 icon1 icon3 showTitle />
    </div>
  );
};

export default FrameComponent;
