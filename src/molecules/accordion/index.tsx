import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import styles from "./accordion.module.scss";

interface Props {
  className?: string;
  name: string;
  icon: React.ReactElement;
}

const Accordion = ({ className, icon, name }: Props) => {
  return (
    <div className={` ${className}`}>
      <button className={`${styles.button}`}>
        {icon}
        {name}
        <AiOutlineDown />
      </button>
    </div>
  );
};

export default Accordion;
