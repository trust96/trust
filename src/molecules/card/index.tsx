import React from "react";
import Typography from "../../atoms/typography/Typography";
import styles from "./card.module.scss";
interface Props {
  title: string;
  children: React.ReactNode;
  tag: React.ReactElement;
}

const Card = ({ title, children, tag }: Props) => {
  return (
    <>
      <div className={`${styles.card}`}>
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
