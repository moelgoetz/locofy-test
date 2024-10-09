import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ArrowschevronDownSmIcon.module.css";

export type ArrowschevronDownSmIconType = {
  className?: string;

  /** Style props */
  arrowschevronDownSmIconPosition?: CSSProperties["position"];
  arrowschevronDownSmIconMargin?: CSSProperties["margin"];
  arrowschevronDownSmIconTop?: CSSProperties["top"];
  arrowschevronDownSmIconRight?: CSSProperties["right"];
};

const ArrowschevronDownSmIcon: FunctionComponent<
  ArrowschevronDownSmIconType
> = ({
  className = "",
  arrowschevronDownSmIconPosition,
  arrowschevronDownSmIconMargin,
  arrowschevronDownSmIconTop,
  arrowschevronDownSmIconRight,
}) => {
  const arrowschevronDownSmIconStyle: CSSProperties = useMemo(() => {
    return {
      position: arrowschevronDownSmIconPosition,
      margin: arrowschevronDownSmIconMargin,
      top: arrowschevronDownSmIconTop,
      right: arrowschevronDownSmIconRight,
    };
  }, [
    arrowschevronDownSmIconPosition,
    arrowschevronDownSmIconMargin,
    arrowschevronDownSmIconTop,
    arrowschevronDownSmIconRight,
  ]);

  return (
    <img
      className={[styles.arrowschevronDownSmIcon, className].join(" ")}
      alt=""
      src="/arrowschevrondownsm.svg"
      style={arrowschevronDownSmIconStyle}
    />
  );
};

export default ArrowschevronDownSmIcon;
