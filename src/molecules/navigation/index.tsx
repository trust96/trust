import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { AiOutlineHome, AiOutlineFileText } from "react-icons/ai";
import { ImStack } from "react-icons/im";
import { BiBriefcaseAlt } from "react-icons/bi";
import Typography from "../../atoms/typography/Typography";
import Link from "next/link";
interface Props {}

const Navigation = ({}: Props) => {
  const toggleNav = () => {
    setIsActive((prev) => !prev);
  };

  const [isActive, setIsActive] = useState(false);
  return (
    <nav className={` ${styles.nav} ${isActive && styles.active}`}>
      <Typography
        tag="span"
        variant="para"
        para="body1"
        className={`${styles.menu}`}
        onClick={() => setIsActive((prev) => !prev)}
      >
        MENU
      </Typography>
      <div className={`${styles.container}`}>
        <ul className={`${styles.list}`}>
          <li className={`${styles.item}`}>
            <Link href="/">
              <a className={`${styles.link}`} onClick={toggleNav}>
                <AiOutlineHome className={`${styles.icon}`} />
                home
              </a>
            </Link>
          </li>
          <li className={`${styles.item}`}>
            <Link href="/mystack">
              <a className={`${styles.link}`} onClick={toggleNav}>
                <ImStack className={`${styles.icon}`} />
                my stack
              </a>
            </Link>
          </li>
          <li className={`${styles.item}`}>
            <Link href="/resume">
              <a className={`${styles.link}`} onClick={toggleNav}>
                <AiOutlineFileText className={`${styles.icon}`} />
                resume
              </a>
            </Link>
          </li>
          <li className={`${styles.item}`}>
            <Link href="/myworks">
              <a className={`${styles.link}`} onClick={toggleNav}>
                <BiBriefcaseAlt className={`${styles.icon}`} />
                my works
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
