import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../../atoms/button";
import Typography from "../../atoms/typography/Typography";
import styles from "./detail.module.scss";

interface Props {
  className?: string;
  children: React.ReactNode;
  stackTags: React.ReactElement;
  totalTime: number;
  src: string;
  challenges: string;
  projectName: string;
  url?: string;
}

const Detail = ({
  children,
  className,
  stackTags,
  totalTime,
  src,
  challenges,
  projectName,
  url,
}: Props) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <>
      <div className={`${styles.detail} ${className}`}>
        <div className={` ${styles.image}`}>
          <img className={`img-fluid ${styles.img}`} src={`${src}`} alt="" />
        </div>

        <div className={`${styles.text}`}>
          <Typography tag="h2" title="quartenary" variant="title">
            {projectName}
          </Typography>
          <Typography tag="p" para="body1" variant="para">
            {children}
          </Typography>
          <Button onClick={handleToggle} variant="primary">
            view more
          </Button>
        </div>
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
            tag="h3"
            variant="title"
            title="quartenary"
            className="mb-3 text-center"
          >
            {projectName}
          </Typography>
          <div className={`${styles.challenges}`}>
            <Typography tag="h4" title="quartenary" variant="title">
              challenges
            </Typography>
            <Typography tag="p" para="body1" variant="para">
              {challenges}
            </Typography>
          </div>
          <div className={`${styles.stack}`}>
            <Typography tag="h4" title="quartenary" variant="title">
              stack
            </Typography>
            <div className={`${styles.stackTags}`}>{stackTags}</div>
          </div>
          <div className={`${styles.time}`}>
            <Typography tag="h4" title="quartenary" variant="title">
              Total time
            </Typography>
            <Typography tag="p" para="body1" variant="para">
              {`${totalTime} hr`}
            </Typography>
          </div>
          <div className={`${styles.url}`}>
            <Typography tag="h4" title="quartenary" variant="title">
              Url
            </Typography>
            <Typography tag="p" para="body1" variant="para">
              <a href={`${url}`}>{url}</a>
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
