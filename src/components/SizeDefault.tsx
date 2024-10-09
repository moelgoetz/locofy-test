import { FunctionComponent } from "react";
import ArrowschevronDownSmIcon from "./ArrowschevronDownSmIcon";
import styles from "./SizeDefault.module.css";

export type SizeDefaultType = {
  className?: string;
  text?: string;
};

const SizeDefault: FunctionComponent<SizeDefaultType> = ({
  className = "",
  text = "Select",
}) => {
  return (
    <div className={[styles.dropdown, className].join(" ")}>
      <div className={styles.text}>{text}</div>
      <ArrowschevronDownSmIcon />
    </div>
  );
};

export default SizeDefault;
