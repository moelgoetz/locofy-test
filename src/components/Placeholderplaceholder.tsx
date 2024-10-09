import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Placeholderplaceholder.module.css";

export type PlaceholderplaceholderType = {
  className?: string;

  /** Style props */
  placeholderplaceholder2Width?: CSSProperties["width"];
  rectangleDivLeft?: CSSProperties["left"];
};

const Placeholderplaceholder: FunctionComponent<PlaceholderplaceholderType> = ({
  className = "",
  placeholderplaceholder2Width,
  rectangleDivLeft,
}) => {
  const placeholderplaceholder2Style: CSSProperties = useMemo(() => {
    return {
      width: placeholderplaceholder2Width,
    };
  }, [placeholderplaceholder2Width]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      left: rectangleDivLeft,
    };
  }, [rectangleDivLeft]);

  return (
    <div
      className={[styles.placeholderplaceholder2, className].join(" ")}
      style={placeholderplaceholder2Style}
    >
      <div
        className={styles.placeholderplaceholder2Child}
        style={rectangleDivStyle}
      />
    </div>
  );
};

export default Placeholderplaceholder;
