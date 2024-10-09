import { FunctionComponent } from "react";
import Header from "./Header";
import PhotoImageImage from "./PhotoImageImage";
import styles from "./Content.module.css";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <Header
        placeholderplaceholderPlaceholderplaceholder="24px"
        placeholderplaceholderPlaceholderplaceholder1="24px"
        placeholderplaceholderPlaceholderplaceholder2="24px"
        placeholderplaceholderRectangle="calc(50% - 10px)"
        placeholderplaceholderRectangle1="calc(50% - 10px)"
        placeholderplaceholderRectangle2="calc(50% - 10px)"
      />
      <div className={styles.menuItemWrapper}>
        <div className={styles.menuItem}>
          <h2 className={styles.cherryMeltSunday}>Cherry Melt Sunday</h2>
          <div className={styles.imageBase}>
            <PhotoImageImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
