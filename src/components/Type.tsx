import { FunctionComponent } from "react";
import Placeholderplaceholder from "./Placeholderplaceholder";
import styles from "./Type.module.css";

export type TypeType = {
  className?: string;
  icon2?: boolean;
  icon1?: boolean;
  icon3?: boolean;
  showTitle?: boolean;
};

const Type: FunctionComponent<TypeType> = ({
  className = "",
  icon2 = true,
  icon1 = true,
  icon3 = true,
  showTitle = true,
}) => {
  return (
    <header className={[styles.mobileNav, className].join(" ")}>
      <div className={styles.barOnlyoption8}>
        <div className={styles.barContent}>
          {icon1 && <Placeholderplaceholder />}
        </div>
        {showTitle && <div className={styles.title}>Atomic Scoops</div>}
        <div className={styles.navigationContent}>
          <div className={styles.placeholderplaceholder2Parent}>
            {icon3 && <Placeholderplaceholder />}
            {icon2 && <Placeholderplaceholder />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Type;
