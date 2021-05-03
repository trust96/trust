import React, { useEffect } from "react";
import Button from "../atoms/button";
import Typography from "../atoms/typography/Typography";
import styles from "../style/homepage.module.scss";
import {
  AiFillAccountBook,
  AiOutlineDownload,
  AiOutlineFileText,
  AiOutlineFolderView,
} from "react-icons/ai";
import { useRouter } from "next/router";
interface Props {}

const index = ({}: Props) => {
  const router = useRouter();
  return (
    <>
      <div className={` row ${styles.container}`}>
        {" "}
        <Typography
          className="col-lg-12 justify-content-lg-start"
          color="primary"
          tag="h1"
          variant="title"
          title="primary"
        >
          Ehilà! &#128075;
        </Typography>
        <div className={`col-12 col-lg-6 ${styles.content}`}>
          <div className={` ${styles.text}`}>
            <Typography tag="h1" variant="title" title="primary">
              Mi chiamo Trust e sono un fullstack developer tedente al
              <span className="text--primary"> frontend</span>
            </Typography>
            <div className={`col-12 col-lg-6 d-lg-none ${styles.hero}`}>
              <img className="img-fluid" src="/hero.svg" alt="" />
            </div>
            <Typography
              className="mb-3"
              tag="h1"
              variant="title"
              color="subtle"
              title="terziary"
            >
              E’ iniziato come un hobby e il resto velo potete immaginare. Amo
              il computer e tutto cio' che lo riguarda.
            </Typography>
          </div>
          <div className={`${styles.buttons}`}>
            <form
              className="d-inline"
              method="get"
              action="/cv.pdf"
              target="_blank"
            >
              <Button
                className="mb-2 me-md-3"
                variant="primary"
                icon={<AiOutlineDownload />}
              >
                Download CV
              </Button>
            </form>
            <Button
              className={` ${styles.secondary}`}
              variant="outline-primary"
              icon={<AiOutlineFileText />}
              onClick={() => router.push("/resume")}
            >
              Resume
            </Button>
          </div>
        </div>
        <div className={`col-12 col-lg-6 d-none d-lg-block ${styles.hero}`}>
          <img className="img-fluid" src="/hero.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default index;
