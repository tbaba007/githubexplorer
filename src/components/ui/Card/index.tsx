
import styles from "./Card.module.scss";
import { CardProps } from "./types";

const Card = ({
  children,
  height,
  width,
}: CardProps) => {
  return (
    <section
      className={styles.container}
      style={{ height: height, width: width }}
    >
      {children}
    </section>
  );
};

export default Card;
