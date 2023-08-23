import styles from "./input.module.scss";
import { InputTypeProps } from "./types";

const Input = ({
  isRequired,
  name,
  onChange,
  placeholder,
  type,
  width,
  height,
  textAlign,
  value
}: Partial<InputTypeProps>) => {
  return (
    <input
      className={styles.container}
      type={type}
      required={isRequired}
      name={name}
      placeholder={placeholder}
      style={{ width: width, height: height, textAlign: textAlign }}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
