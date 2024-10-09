import { FunctionComponent } from "react";
import Property1DropdownCollapsed from "./Property1DropdownCollapsed";
import ListItem from "./ListItem";
import styles from "./DropdownContainer.module.css";

export type DropdownContainerType = {
  className?: string;
};

const DropdownContainer: FunctionComponent<DropdownContainerType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.dropdownContainer, className].join(" ")}>
      <div className={styles.dropdownInput}>
        <Property1DropdownCollapsed
          arrowschevronDownSmIconPosition="relative"
          arrowschevronDownSmIconMargin="unset"
          arrowschevronDownSmIconTop="unset"
          arrowschevronDownSmIconRight="unset"
        />
        <div className={styles.selectiontoppings}>
          <div className={styles.subheading}>
            <div className={styles.toppings}>Toppings</div>
          </div>
          <ListItem
            label="Nuts"
            propWidth="69px"
            propTextDecoration="unset"
            propWidth1="38px"
          />
          <ListItem
            label="Fruit"
            propWidth="71px"
            propTextDecoration="none"
            propWidth1="40px"
          />
          <ListItem label="Candy" />
        </div>
      </div>
    </div>
  );
};

export default DropdownContainer;
