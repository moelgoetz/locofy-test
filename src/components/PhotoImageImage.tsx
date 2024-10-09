import { FunctionComponent } from "react";
import styles from "./PhotoImageImage.module.css";

export type PhotoImageImageType = {
  className?: string;
};

const PhotoImageImage: FunctionComponent<PhotoImageImageType> = ({
  className = "",
}) => {
  return (
    <img
      className={[styles.photoImageimage, className].join(" ")}
      loading="lazy"
      alt=""
      src="/photo--imageimage.svg"
    />
  );
};

export default PhotoImageImage;
