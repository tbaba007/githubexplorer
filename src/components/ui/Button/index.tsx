import styles from "./Button.module.scss";
import { ButtonProps } from "./types";

const Button = ({
  onClick,
  text,
  width,
  height,
}: Partial<ButtonProps>) => {
  return (
    <button
      className={styles.Button}
      style={{ width: width, height: height }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
