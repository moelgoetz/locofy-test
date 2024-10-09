import { FunctionComponent } from "react";
import SizeLargeTypeSolid1 from "./SizeLargeTypeSolid1";
import styles from "./StateDefault.module.css";

export type StateDefaultType = {
  className?: string;
  text?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
};

const StateDefault: FunctionComponent<StateDefaultType> = ({
  className = "",
  text,
  iconLeft,
  iconRight,
}) => {
  return (
    <button className={[styles.buttonInteractive, className].join(" ")}>
      <SizeLargeTypeSolid1
        iconLeft={iconLeft}
        iconRight={iconRight}
        text={text}
      />
    </button>
  );
};

export default StateDefault;
