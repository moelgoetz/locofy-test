import { FunctionComponent } from "react";
import styles from "./StateUnchecked.module.css";

export type StateUncheckedType = {
  className?: string;
};

const StateUnchecked: FunctionComponent<StateUncheckedType> = ({
  className = "",
}) => {
  return (
    <input className={[styles.checkbox, className].join(" ")} type="checkbox" />
  );
};

export default StateUnchecked;
