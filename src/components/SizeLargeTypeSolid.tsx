import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SizeLargeTypeSolid.module.css";

export type SizeLargeTypeSolidType = {
  className?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  text?: string;

  /** Style props */
  buttonPadding?: CSSProperties["padding"];
  buttonFlex?: CSSProperties["flex"];
  buttonHeight?: CSSProperties["height"];
  buttonWidth?: CSSProperties["width"];
  labelHeight?: CSSProperties["height"];
  labelWidth?: CSSProperties["width"];
  labelDisplay?: CSSProperties["display"];
};

const SizeLargeTypeSolid: FunctionComponent<SizeLargeTypeSolidType> = ({
  className = "",
  iconLeft = false,
  iconRight = false,
  text = "Submit",
  buttonPadding,
  buttonFlex,
  buttonHeight,
  buttonWidth,
  labelHeight,
  labelWidth,
  labelDisplay,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      padding: buttonPadding,
      flex: buttonFlex,
      height: buttonHeight,
      width: buttonWidth,
    };
  }, [buttonPadding, buttonFlex, buttonHeight, buttonWidth]);

  const labelStyle: CSSProperties = useMemo(() => {
    return {
      height: labelHeight,
      width: labelWidth,
      display: labelDisplay,
    };
  }, [labelHeight, labelWidth, labelDisplay]);

  return (
    <button
      className={[styles.button, className].join(" ")}
      style={buttonStyle}
    >
      {iconLeft && (
        <img
          className={styles.actionsUistarSolid}
          alt=""
          src="/actions--uistarsolid.svg"
        />
      )}
      <div className={styles.label} style={labelStyle}>
        {text}
      </div>
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