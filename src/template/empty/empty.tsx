import React from "react";
import { HiOutlineEmojiSad } from "react-icons/hi";
import Typography from "../../atoms/typography/Typography";
import styles from "./empty.module.scss";
interface Props {}

const Empty = (props: Props) => {
  return (
    <div className={`${styles.container}`}>
      <Typography
        className={`${styles.text}`}
        tag="h2"
        variant="title"
        title="primary"
        color="subtle"
      >
        <HiOutlineEmojiSad />
        oops! there’s nothing here at the moment. <br /> Please stay tuned!
      </Typography>
    </div>
  );
};

export default Empty;
