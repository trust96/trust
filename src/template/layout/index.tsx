import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navigation from "../../molecules/navigation";
import styles from "./styles.module.scss";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { BsSlash } from "react-icons/bs";
import Typography from "../../atoms/typography/Typography";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const [title, setTitle] = useState("");
  const router = useRouter();
  useEffect(() => {
    switch (router.pathname) {
      case "/":
        return setTitle("");
      case "/mystack":
        return setTitle("my stack");
      case "/myworks":
        return setTitle("my works");
      case "/resume":
        return setTitle("resume");
    }
  });
  return (
    <>
      <div className={`${styles.blob}`}></div>
      <Navigation />
      <div className={`${styles.wrapper}`}>
        <div className="container-fluid container-xl">
          <div className={`${styles.logo}`}>
            <AiOutlineLeft className={`${styles.left}`} />
            Trust <BsSlash className={`${styles.slash}`} />
            <AiOutlineRight className={`${styles.right}`} />
          </div>
          <Typography
            className={`${styles.title}`}
            tag="h2"
            title="secondary"
            variant="title"
          >
            {title}
          </Typography>
          {children}
        </div>
        <div className={`${styles.footer}`}>
          <div className={`${styles.icons}`}>
            <AiFillGithub className={`${styles.icon}`}></AiFillGithub>
            <AiFillTwitterCircle
              className={`${styles.icon}`}
            ></AiFillTwitterCircle>
          </div>
          <div className={`${styles.copyright}`}>
            <Typography tag="span" variant="para" para="body2">
              &copy; All rights reseverd to Oriabure trust
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
