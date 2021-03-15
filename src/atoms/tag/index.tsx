import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Typography from "../typography/Typography";
import styles from "./tag.module.scss";

interface Props {
  className: string;
  children: React.ReactNode;
  icon: React.ReactElement;
  name: string;
  title: string;
}

const Tag = ({ children, className, icon, name, title }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const handleToggle = (e: React.MouseEvent<HTMLElement | SVGElement>) => {
    setIsActive((prev) => !prev);
  };
  return (
    <>
      <div className={`${styles.tag} ${className}`} onClick={handleToggle}>
        {icon} {name}
      </div>

      <div
        className={`${styles.container} ${
          isActive && styles["container--active"]
        }`}
      >
        <div
          className={`${styles.content} ${
            isActive && styles["content--active"]
          }`}
        >
          <div className={`${styles.close}`}>
            <AiOutlineClose
              onClick={handleToggle}
              style={{ cursor: "pointer" }}
            />
          </div>
          <Typography
            tag="h4"
            variant="title"
            title="quartenary"
            color="primary"
            className="mb-3"
          >
            {title}
          </Typography>
          {children}
        </div>
      </div>
    </>
  );
};

export default Tag;
