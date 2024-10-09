import { FunctionComponent } from "react";
import ArrowschevronDownSmIcon from "./ArrowschevronDownSmIcon";
import styles from "./Property1DropdownCollapsed.module.css";

export type Property1DropdownCollapsedType = {
  className?: string;
  arrowschevronDownSmIconPosition?: string;
  arrowschevronDownSmIconMargin?: string;
  arrowschevronDownSmIconTop?: string;
  arrowschevronDownSmIconRight?: string;
};

const Property1DropdownCollapsed: FunctionComponent<
  Property1DropdownCollapsedType
> = ({
  className = "",
  arrowschevronDownSmIconPosition,
  arrowschevronDownSmIconMargin,
  arrowschevronDownSmIconTop,
  arrowschevronDownSmIconRight,
}) => {
  return (
    <div className={[styles.menuDropdown, className].join(" ")}>
      <div className={styles.text}>Select</div>
      <ArrowschevronDownSmIcon
        arrowschevronDownSmIconPosition={arrowschevronDownSmIconPosition}
        arrowschevronDownSmIconMargin={arrowschevronDownSmIconMargin}
        arrowschevronDownSmIconTop={arrowschevronDownSmIconTop}
        arrowschevronDownSmIconRight={arrowschevronDownSmIconRight}
      />
    </div>
  );
};

export default Property1DropdownCollapsed;
