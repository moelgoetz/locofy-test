import { FunctionComponent } from "react";
import styles from "./ArrowschevronDownSmIcon.module.css";

export type ArrowschevronDownSmIconType = {
  className?: string;
};

const ArrowschevronDownSmIcon: FunctionComponent<
  ArrowschevronDownSmIconType
> = ({ className = "" }) => {
  return (
    <img
      className={[styles.arrowschevronDownSmIcon, className].join(" ")}
      alt=""
      src="/arrowschevrondownsm.svg"
    />
  );
};

export default ArrowschevronDownSmIcon;
