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
    <nav
      className={` ${styles.nav} ${isActive && styles.active}`}
      onMouseEnter={() => setIsActive((prev) => !prev)}
      onMouseLeave={() => setIsActive((prev) => !prev)}
      onClick={() => setIsActive((prev) => !prev)}
    >
      <Typography
        tag="span"
        variant="para"
        para="body1"
        className={`${styles.menu}`}
      >
        MENU
      </Typography>
      <div className={`${styles.container}`}>
        <ul className={`${styles.list}`}>
          <li className={`${styles.item}`}>
            <a className={`${styles.link}`} href="/" onClick={toggleNav}>
              <AiOutlineHome className={`${styles.icon}`} />
              home
            </a>
          </li>
          <li className={`${styles.item}`}>
            <a href="/mystack" className={`${styles.link}`} onClick={toggleNav}>
              <ImStack className={`${styles.icon}`} />
              my stack
            </a>
          </li>
          <li className={`${styles.item}`}>
            <a href="/resume" className={`${styles.link}`} onClick={toggleNav}>
              <AiOutlineFileText className={`${styles.icon}`} />
              resume
            </a>
          </li>
          <li className={`${styles.item}`}>
            <a href="/myworks" className={`${styles.link}`} onClick={toggleNav}>
              <BiBriefcaseAlt className={`${styles.icon}`} />
              my works
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
