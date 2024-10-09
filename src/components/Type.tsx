import { FunctionComponent } from "react";
import Placeholderplaceholder from "./Placeholderplaceholder";
import styles from "./Type.module.css";

export type TypeType = {
  className?: string;
  icon2?: boolean;
  icon1?: boolean;
  icon3?: boolean;
  showTitle?: boolean;
  placeholderplaceholderPlaceholderplaceholder?: string;
  placeholderplaceholderPlaceholderplaceholder1?: string;
  placeholderplaceholderPlaceholderplaceholder2?: string;
  placeholderplaceholderRectangle?: string;
  placeholderplaceholderRectangle1?: string;
  placeholderplaceholderRectangle2?: string;
};

const Type: FunctionComponent<TypeType> = ({
  className = "",
  icon2 = true,
  icon1 = true,
  icon3 = true,
  showTitle = true,
  placeholderplaceholderPlaceholderplaceholder,
  placeholderplaceholderPlaceholderplaceholder1,
  placeholderplaceholderPlaceholderplaceholder2,
  placeholderplaceholderRectangle,
  placeholderplaceholderRectangle1,
  placeholderplaceholderRectangle2,
}) => {
  return (
    <header className={[styles.mobileNav, className].join(" ")}>
      <div className={styles.barOnlyoption8}>
        <div className={styles.barContent}>
          {icon1 && (
            <Placeholderplaceholder
              placeholderplaceholder2Width={
                placeholderplaceholderPlaceholderplaceholder
              }
              rectangleDivLeft={placeholderplaceholderRectangle}
            />
          )}
        </div>
        {showTitle && <div className={styles.title}>Atomic Scoops</div>}
        <div className={styles.navigationContent}>
          <div className={styles.placeholderplaceholder2Parent}>
            {icon3 && (
              <Placeholderplaceholder
                placeholderplaceholder2Width={
                  placeholderplaceholderPlaceholderplaceholder1
                }
                rectangleDivLeft={placeholderplaceholderRectangle1}
              />
            )}
            {icon2 && (
              <Placeholderplaceholder
                placeholderplaceholder2Width={
                  placeholderplaceholderPlaceholderplaceholder2
                }
                rectangleDivLeft={placeholderplaceholderRectangle2}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Type;