import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import Typography from "../../atoms/typography/Typography";
import styles from "./accordion.module.scss";

interface Props {
  className?: string;
  name: string;
  icon: React.ReactElement;
  children: React.ReactNode;
}

const Accordion = ({ className, icon, name, children }: Props) => {
  const [isCollapse, setIsCollapse] = useState(true);
  const handleCollapse = () => {
    setIsCollapse((prev) => !prev);
  };
  return (
    <div className={` ${styles.accordion} ${className}`}>
      <button className={`${styles.button}`} onClick={handleCollapse}>
        {icon}
        <Typography
          className={`${styles["button__text"]}`}
          tag="span"
          variant="title"
          title="quartenary"
        >
          {name}
        </Typography>
        <AiOutlineDown />
      </button>
      <div className={`${styles.container} ${isCollapse && styles.active}`}>
        <div className={`${styles.content}`}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
