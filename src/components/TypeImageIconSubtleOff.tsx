import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TypeImageIconSubtleOff.module.css";

export type TypeImageIconSubtleOffType = {
  className?: string;
  typeImageIconSubtleOffImage?: string;

  /** Style props */
  imageBaseIconBorder?: CSSProperties["border"];
  imageBaseIconBackgroundColor?: CSSProperties["backgroundColor"];
  imageBaseIconHeight?: CSSProperties["height"];
  imageBaseIconWidth?: CSSProperties["width"];
  imageBaseIconOutline?: CSSProperties["outline"];
  imageBaseIconFlex?: CSSProperties["flex"];
  imageBaseIconAlignSelf?: CSSProperties["alignSelf"];
  imageBaseIconMaxHeight?: CSSProperties["maxHeight"];
};

const TypeImageIconSubtleOff: FunctionComponent<TypeImageIconSubtleOffType> = ({
  className = "",
  typeImageIconSubtleOffImage,
  imageBaseIconBorder,
  imageBaseIconBackgroundColor,
  imageBaseIconHeight,
  imageBaseIconWidth,
  imageBaseIconOutline,
  imageBaseIconFlex,
  imageBaseIconAlignSelf,
  imageBaseIconMaxHeight,
}) => {
  const imageBaseIconStyle: CSSProperties = useMemo(() => {
    return {
      border: imageBaseIconBorder,
      backgroundColor: imageBaseIconBackgroundColor,
      height: imageBaseIconHeight,
      width: imageBaseIconWidth,
      outline: imageBaseIconOutline,
      flex: imageBaseIconFlex,
      alignSelf: imageBaseIconAlignSelf,
      maxHeight: imageBaseIconMaxHeight,
    };
  }, [
    imageBaseIconBorder,
    imageBaseIconBackgroundColor,
    imageBaseIconHeight,
    imageBaseIconWidth,
    imageBaseIconOutline,
    imageBaseIconFlex,
    imageBaseIconAlignSelf,
    imageBaseIconMaxHeight,
  ]);

  return (
    <img
      className={[styles.imageBaseIcon, className].join(" ")}
      rows={14}
      cols={16}
      alt=""
      src={typeImageIconSubtleOffImage}
      style={imageBaseIconStyle}
    />
  );
};

export default TypeImageIconSubtleOff;