import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ListItem.module.css";

export type ListItemType = {
  className?: string;
  label?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propTextDecoration?: CSSProperties["textDecoration"];
  propWidth1?: CSSProperties["width"];
};

const ListItem: FunctionComponent<ListItemType> = ({
  className = "",
  label = "Candy",
  propWidth,
  propTextDecoration,
  propWidth1,
}) => {
  const listItemStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const nutsStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
      width: propWidth1,
    };
  }, [propTextDecoration, propWidth1]);

  return (
    <div
      className={[styles.listItem, className].join(" ")}
      style={listItemStyle}
    >
      <input className={styles.frameInput} type="checkbox" />
      <a className={styles.nuts} style={nutsStyle}>
        {label}
      </a>
    </div>
  );
};

export default ListItem;
