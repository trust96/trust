import React from "react";
import { IconType } from "react-icons";
import styles from "./styles.module.scss";
interface Props {
  variant?: "primary" | "outline-primary";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactElement;
}

const Button = ({ variant, children, onClick, className, icon }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${styles[`${variant}`]} ${styles.button} ${className}`}
    >
      {icon} <label>{children}</label>
    </button>
  );
};

export default Button;
