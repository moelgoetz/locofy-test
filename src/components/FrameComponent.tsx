import { FunctionComponent } from "react";
import Type from "./Type";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.mobileNavWrapper, className].join(" ")}>
      <Type
        icon2
        icon1
        icon3
        showTitle
        placeholderplaceholderPlaceholderplaceholder="44px"
        placeholderplaceholderPlaceholderplaceholder1="24px"
        placeholderplaceholderRectangle="calc(50% - 20px)"
        placeholderplaceholderRectangle1="calc(50% - 10px)"
      />
    </div>
  );
};

export default FrameComponent;