import { FunctionComponent } from "react";
import styles from "./SizeLargeTypeSolid1.module.css";

export type SizeLargeTypeSolid1Type = {
  className?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  text?: string;
};

const SizeLargeTypeSolid1: FunctionComponent<SizeLargeTypeSolid1Type> = ({
  className = "",
  iconLeft = false,
  iconRight = false,
  text = "Submit",
}) => {
  return (
    <div className={[styles.button, className].join(" ")}>
      {iconLeft && (
        <img
          className={styles.actionsUistarSolid}
          alt=""
          src="/actions--uistarsolid.svg"
        />
      )}
      <div className={styles.label}>{text}</div>
      {iconRight && (
        <img
          className={styles.actionsUistarSolid}
          alt=""
          src="/arrowsarrowright.svg"
        />
      )}
    </div>
  );
};

export default SizeLargeTypeSolid1;
