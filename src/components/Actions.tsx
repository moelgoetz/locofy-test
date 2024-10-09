import { FunctionComponent } from "react";
import StateDefault from "./StateDefault";
import styles from "./Actions.module.css";

export type ActionsType = {
  className?: string;
};

const Actions: FunctionComponent<ActionsType> = ({ className = "" }) => {
  return (
    <footer className={[styles.actions, className].join(" ")}>
      <div className={styles.buttonclear}>
        <a className={styles.clear}>Clear</a>
      </div>
      <StateDefault text="Submit" iconLeft iconRight />
    </footer>
  );
};

export default Actions;
