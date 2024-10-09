import { FunctionComponent, useMemo, type CSSProperties } from "react";
import ArrowschevronDownSmIcon from "./ArrowschevronDownSmIcon";
import styles from "./SizeDefault.module.css";

export type SizeDefaultType = {
  className?: string;
  text?: string;

  /** Style props */
  dropdownAlignSelf?: CSSProperties["alignSelf"];
  dropdownWidth?: CSSProperties["width"];
  dropdownHeight?: CSSProperties["height"];
  textHeight?: CSSProperties["height"];
  textWidth?: CSSProperties["width"];
  textDisplay?: CSSProperties["display"];
};

const SizeDefault: FunctionComponent<SizeDefaultType> = ({
  className = "",
  text = "Select",
  dropdownAlignSelf,
  dropdownWidth,
  dropdownHeight,
  textHeight,
  textWidth,
  textDisplay,
}) => {
  const dropdownStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: dropdownAlignSelf,
      width: dropdownWidth,
      height: dropdownHeight,
    };
  }, [dropdownAlignSelf, dropdownWidth, dropdownHeight]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      height: textHeight,
      width: textWidth,
      display: textDisplay,
    };
  }, [textHeight, textWidth, textDisplay]);

  return (
    <div
      className={[styles.dropdown, className].join(" ")}
      style={dropdownStyle}
    >
      <div className={styles.text} style={textStyle}>
        {text}
      </div>
      <ArrowschevronDownSmIcon />
    </div>
  );
};

export default SizeDefault;