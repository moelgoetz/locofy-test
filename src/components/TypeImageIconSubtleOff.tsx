import { FunctionComponent } from "react";
import styles from "./TypeImageIconSubtleOff.module.css";

export type TypeImageIconSubtleOffType = {
  className?: string;
};

const TypeImageIconSubtleOff: FunctionComponent<TypeImageIconSubtleOffType> = ({
  className = "",
}) => {
  return (
    <img
      className={[styles.imageBaseIcon, className].join(" ")}
      rows={14}
      cols={16}
      alt=""
      src="/image-base.svg"
    />
  );
};

export default TypeImageIconSubtleOff;
