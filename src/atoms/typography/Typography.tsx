import { Props } from "./Props";
import styles from "./styles.module.scss";
const Typography = ({
  tag,
  children,
  className,
  para,
  title,
  variant,
  color,
  onClick,
}: Props) => {
  const Tag = `${tag}` as
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "span"
    | "strong"
    | "i";
  return (
    <Tag
      className={`${styles[`title--${title}`]} ${styles[`para--${para}`]} ${
        styles[`${variant}`]
      } ${className} ${styles[`text--${color}`]}`}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
};

export default Typography;
