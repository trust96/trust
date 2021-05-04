import React, { useEffect, useRef } from "react";
import styles from "../style/work.module.scss";
import Detail from "../molecules/detail";
import Tag from "../atoms/tag";
import {
  SiBootstrap,
  SiCss3,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiNextDotJs,
  SiReact,
  SiSass,
  SiTypescript,
} from "react-icons/si";
import { FaHtml5, FaTools } from "react-icons/fa";
interface Props {}
const dummyText =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolores officiis laboriosam vitae assumenda id deserunt deleniti? Odit, consequatur animi?";
const myworks = (props: Props) => {
  return (
    <>
      <Detail
        projectName="Portfolio"
        src="/portfolio.png"
        challenges="This was my first project, as such, i didn't make any design system, because i didn't yet know what it was.
        My biggest challenge was to make things responsive "
        totalTime={20}
        url="https://trust96.github.io/myportfolio/"
        stackTags={
          <>
            <Tag icon={<FaHtml5 />} name="html" />
            <Tag icon={<SiJavascript />} name="javascript" />
            <Tag icon={<SiSass />} name="sass" />
          </>
        }
      >
        This was my first project, as such...
      </Detail>
      <Detail
        projectName="Gente di toscana"
        src="/gente-di-toscana.png"
        challenges="This was my second project. First i had to make the design system with figma, then i switched to development. my challenges was the time i set, it was 2 days, and in 2 days i did what i could. "
        totalTime={16}
        url="https://trust96.github.io/GenteDiToscana/"
        stackTags={
          <>
            <Tag icon={<FaTools />} name="pug" />
            <Tag icon={<SiJavascript />} name="javascript" />
            <Tag icon={<SiSass />} name="sass" />
            <Tag icon={<SiBootstrap />} name="bootstrap" />
            <Tag icon={<SiFigma />} name="figma" />
          </>
        }
      >
        This was my second project. First i had to...
      </Detail>
      <Detail
        projectName="Wikidance"
        src="/wikidance.png"
        challenges="This is my dream project. to create a social media for dancers. i'm still working on it though. the challeges is implementing the backend. "
        totalTime={20}
        url="https://wikidanc.herokuapp.com"
        stackTags={
          <>
            <Tag icon={<SiNextDotJs />} name="nextjs" />
            <Tag icon={<SiSass />} name="sass" />
            <Tag icon={<SiBootstrap />} name="bootstrap" />
            <Tag icon={<SiTypescript />} name="typescript" />
            <Tag icon={<SiFigma />} name="figma" />
          </>
        }
      >
        This is my dream project. to create a social media for dancers...
      </Detail>
    </>
  );
};

export default myworks;
