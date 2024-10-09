import { FunctionComponent } from "react";
import styles from "./Placeholderplaceholder.module.css";

export type PlaceholderplaceholderType = {
  className?: string;
};

const Placeholderplaceholder: FunctionComponent<PlaceholderplaceholderType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.placeholderplaceholder2, className].join(" ")}>
      <div className={styles.placeholderplaceholder2Child} />
    </div>
  );
};

export default Placeholderplaceholder;
