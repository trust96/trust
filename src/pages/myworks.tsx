import React, { useEffect, useRef } from "react";
import styles from "../style/work.module.scss";
import Detail from "../molecules/detail";
import Tag from "../atoms/tag";
import { SiBootstrap, SiNextDotJs, SiTypescript } from "react-icons/si";
interface Props {}
const dummyText =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolores officiis laboriosam vitae assumenda id deserunt deleniti? Odit, consequatur animi?";
const myworks = (props: Props) => {
  return (
    <>
      <Detail
        projectName="portfolio"
        src="https://via.placeholder.com/150"
        challenges={dummyText}
        totalTime={24}
        stackTags={
          <>
            <Tag icon={<SiNextDotJs />} name="nextjs" />
            <Tag icon={<SiTypescript />} name="typescript" />
            <Tag icon={<SiBootstrap />} name="bootstrap" />
          </>
        }
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quia
        illum eos modi voluptatem eaque consectetur ut, officiis velit deserunt.
      </Detail>
    </>
  );
};

export default myworks;
