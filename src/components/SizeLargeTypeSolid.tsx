import { FunctionComponent } from "react";
import styles from "./SizeLargeTypeSolid.module.css";

export type SizeLargeTypeSolidType = {
  className?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  text?: string;
};

const SizeLargeTypeSolid: FunctionComponent<SizeLargeTypeSolidType> = ({
  className = "",
  iconLeft = false,
  iconRight = false,
  text = "Submit",
}) => {
  return (
    <button className={[styles.button, className].join(" ")}>
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
    </button>
  );
};

export default SizeLargeTypeSolid;
