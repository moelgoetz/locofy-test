import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Placeholderplaceholder from "./Placeholderplaceholder";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
  placeholderplaceholderPlaceholderplaceholder?: string;
  placeholderplaceholderPlaceholderplaceholder1?: string;
  placeholderplaceholderPlaceholderplaceholder2?: string;
  placeholderplaceholderRectangle?: string;
  placeholderplaceholderRectangle1?: string;
  placeholderplaceholderRectangle2?: string;

  /** Style props */
  placeholderplaceholder2AlignSelf?: CSSProperties["alignSelf"];
  placeholderplaceholder2MarginRight?: CSSProperties["marginRight"];
  placeholderplaceholder2Width?: CSSProperties["width"];
};

const Header: FunctionComponent<HeaderType> = ({
  className = "",
  placeholderplaceholder2AlignSelf,
  placeholderplaceholder2MarginRight,
  placeholderplaceholder2Width,
  placeholderplaceholderPlaceholderplaceholder,
  placeholderplaceholderPlaceholderplaceholder1,
  placeholderplaceholderPlaceholderplaceholder2,
  placeholderplaceholderRectangle,
  placeholderplaceholderRectangle1,
  placeholderplaceholderRectangle2,
}) => {
  const headerStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: placeholderplaceholder2AlignSelf,
      marginRight: placeholderplaceholder2MarginRight,
      width: placeholderplaceholder2Width,
    };
  }, [
    placeholderplaceholder2AlignSelf,
    placeholderplaceholder2MarginRight,
    placeholderplaceholder2Width,
  ]);

  return (
    <header
      className={[styles.header, className].join(" ")}
      style={headerStyle}
    >
      <div className={styles.titleArea}>
        <Placeholderplaceholder
          placeholderplaceholder2Width={
            placeholderplaceholderPlaceholderplaceholder
          }
          rectangleDivLeft={placeholderplaceholderRectangle}
        />
      </div>
      <div className={styles.placeholderplaceholder2}>
        <div className={styles.placeholderplaceholder2Child} />
      </div>
      <div className={styles.atomicScoops}>Atomic Scoops</div>
      <div className={styles.titleArea1}>
        <div className={styles.placeholderplaceholder2Parent}>
          <Placeholderplaceholder
            placeholderplaceholder2Width={
              placeholderplaceholderPlaceholderplaceholder1
            }
            rectangleDivLeft={placeholderplaceholderRectangle1}
          />
          <Placeholderplaceholder
            placeholderplaceholder2Width={
              placeholderplaceholderPlaceholderplaceholder2
            }
            rectangleDivLeft={placeholderplaceholderRectangle2}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
