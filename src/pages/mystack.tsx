import React from "react";
import {
  AiFillAccountBook,
  AiFillHtml5,
  AiFillTool,
  AiOutlineHtml5,
} from "react-icons/ai";
import {
  SiAdobephotoshop,
  SiBootstrap,
  SiCss3,
  SiFigma,
  SiGimp,
  SiGit,
  SiGithub,
  SiGnubash,
  SiGraphql,
  SiInkscape,
  SiJavascript,
  SiNextDotJs,
  SiNodeDotJs,
  SiNpm,
  SiPhp,
  SiPostgresql,
  SiPowershell,
  SiReact,
  SiRedux,
  SiStyledComponents,
  SiTailwindcss,
  SiTypescript,
  SiWebpack,
} from "react-icons/si";
import {
  FaBootstrap,
  FaDatabase,
  FaImage,
  FaPaintBrush,
  FaTerminal,
  FaToolbox,
} from "react-icons/fa";
import Tag from "../atoms/tag";
import Accordion from "../molecules/accordion";
import Card from "../molecules/card";
import styles from "../style/stack.module.scss";
const dummyText =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos asperiores laboriosam optio eveniet cupiditate fugit, eos totam quidem eius doloribus esse repudiandae officia quos assumenda rerum dolore soluta laborum in? Laborum hic recusandae tempora vel, aliquam saepe sint minus possimus neque similique quos suscipit facilis consequuntur? Veniam incidunt eveniet illum earum ";
interface Props {}

const mystack = (props: Props) => {
  return (
    <div className={`${styles.stack}`}>
      {
        // frontend
      }
      <Card
        tag={
          <>
            <Tag name="Graphql" icon={<SiGraphql />} title="Graphql">
              {dummyText}
            </Tag>
            <Tag name="redux" icon={<SiRedux />} title="Redux">
              {dummyText}
            </Tag>
          </>
        }
        title="frontend"
      >
        <Accordion name="Mark Up" icon={<AiOutlineHtml5 />}>
          <Tag icon={<AiFillHtml5 />} name="html" title="Html5">
            {dummyText}
          </Tag>
          <Tag icon={<AiFillTool />} name="pug" title="Pug">
            {dummyText}
          </Tag>
        </Accordion>
        <Accordion name="Styling" icon={<SiCss3 />}>
          <Tag icon={<SiCss3 />} name="css" title="Css3">
            {dummyText}
          </Tag>
          <Tag icon={<AiFillTool />} name="scss" title="Scss">
            {dummyText}
          </Tag>
          <Tag icon={<SiBootstrap />} name="bootstrap" title="Bootstrap">
            {dummyText}
          </Tag>
          <Tag icon={<SiTailwindcss />} name="tailwind" title="Tailwind">
            {dummyText}
          </Tag>
          <Tag
            icon={<SiStyledComponents />}
            name="styled-components"
            title="Styled-components"
          >
            {dummyText}
          </Tag>
          <Tag
            icon={<AiFillTool />}
            name="css/scss modules"
            title="Css/Scss modules"
          >
            {dummyText}
          </Tag>
        </Accordion>
        <Accordion name="Dynamic" icon={<SiJavascript />}>
          <Tag icon={<SiJavascript />} name="javascript" title="Javascript">
            {dummyText}
          </Tag>
          <Tag icon={<SiTypescript />} name="typescript" title="Typescript">
            {dummyText}
          </Tag>
          <Tag icon={<SiReact />} name="react" title="React">
            {dummyText}
          </Tag>
          <Tag icon={<SiNextDotJs />} name="nextjs" title="Neaxtjs">
            {dummyText}
          </Tag>
          <Tag name="react native" icon={<SiReact />} title="React native">
            {dummyText}
          </Tag>
        </Accordion>
      </Card>

      {
        // Backend
      }
      <Card
        tag={
          <>
            <Tag name="Graphql" icon={<SiGraphql />} title="Graphql">
              {dummyText}
            </Tag>
            <Tag name="php" icon={<SiPhp />} title="php">
              {dummyText}
            </Tag>
          </>
        }
        title="backend"
      >
        <Accordion name="Language" icon={<SiNodeDotJs />}>
          <Tag icon={<SiNodeDotJs />} name="nodejs" title="Nodejs">
            {dummyText}
          </Tag>
          <Tag icon={<AiFillTool />} name="Expressjs" title="Expressjs">
            {dummyText}
          </Tag>
        </Accordion>

        <Accordion name="Database" icon={<FaDatabase />}>
          <Tag icon={<SiPostgresql />} name="postgresql" title="Postgresql">
            {dummyText}
          </Tag>
          <Tag icon={<AiFillTool />} name="typeorm" title="Typeorm">
            {dummyText}
          </Tag>
        </Accordion>
      </Card>
      {
        // UX/UI
      }
      <Card
        tag={
          <>
            <Tag name="Inkscape" icon={<SiInkscape />} title="Inkscape">
              {dummyText}
            </Tag>
            <Tag name="Gimp" icon={<SiGimp />} title="Gimp">
              {dummyText}
            </Tag>
          </>
        }
        title="UI/UX Design"
      >
        <Accordion name="UI Design" icon={<FaPaintBrush />}>
          <Tag icon={<SiFigma />} name="figma" title="Figma">
            {dummyText}
          </Tag>
        </Accordion>

        <Accordion name="Image" icon={<FaImage />}>
          <Tag icon={<SiAdobephotoshop />} name="photoshop" title="Photoshop">
            {dummyText}
          </Tag>
        </Accordion>
      </Card>
      {
        // Bonus
      }
      <Card
        tag={
          <>
            <Tag name="Bash" icon={<SiGnubash />} title="Bash">
              {dummyText}
            </Tag>
          </>
        }
        title="bonus"
      >
        <Accordion name="Build tools" icon={<FaToolbox />}>
          <Tag icon={<SiWebpack />} name="webpack" title="Webpack">
            {dummyText}
          </Tag>
          <Tag icon={<SiNpm />} name="npm" title="Npm">
            {dummyText}
          </Tag>
          <Tag icon={<SiGit />} name="git" title="Git">
            {dummyText}
          </Tag>
          <Tag icon={<SiGithub />} name="github" title="Github">
            {dummyText}
          </Tag>
        </Accordion>

        <Accordion name="Terminal" icon={<FaTerminal />}>
          <Tag
            icon={<SiPowershell />}
            name="powershell core"
            title="Powershell core"
          >
            {dummyText}
          </Tag>
        </Accordion>
      </Card>
    </div>
  );
};

export default mystack;
