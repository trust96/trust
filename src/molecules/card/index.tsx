import React from "react";
import Typography from "../../atoms/typography/Typography";
import Accordion from "../accordion";
import styles from "./card.module.scss";
import { AiOutlineHtml5 } from "react-icons/ai";
interface Props {
  title: string;
  children: React.ReactNode;
  tag: React.ReactElement;
  className?: string;
}

const Card = ({ title, children, tag, className }: Props) => {
  return (
    <>
      <div className={`${styles.card} ${className}`}>
        <Typography tag="h2" variant="title" title="secondary">
          {title}
        </Typography>

        <div className={`${styles.body}`}>{children}</div>
        <Typography tag="h2" variant="title" title="secondary">
          in progress
        </Typography>
        <div className={`${styles.progress}`}>{tag}</div>
      </div>
    </>
  );
};

export default Card;
