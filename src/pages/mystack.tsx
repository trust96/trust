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

const data = {
  frontend: {
    html:
      "HTML is where it all started. It was love at first sight. Even if this mark-up language seems simple in the beginning, the more you deep down, the more you understand that it has its complexities.",
    pug:
      "Pug comes to rescue when Html is just not enough because too much Html can be difficult to maintain.",
    css: `You don't really have that much of a choice when it comes to formating your Html. Only three words "i love css"`,
    sass:
      "css can be quite hard to deal with when your application is big. that is why i use sass for a modular architechture",
    bootstrap:
      "Bootstrap saves time. I am not a proud user, but i have to admit that it saves time",
    tailwind: "tailwind saves a lot of time.",
    styledComponents: `it is not my favorite way of styling react components, but i have to admit that it is very useful`,
    cssModule: "it is a better alternative to styled components",
    redux: "i have already used it, but it is not enough",
    graphql: "definitly in my list",
    typescript:
      "Typescript is a superset of javascript and with its intellisense it just make life easier",
    javascript: "",
    react: "",
    nextjs: "",
  },
  backend: {},
  ui: {},
  bonus: {},
};
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
            {data.frontend.html}
          </Tag>
          <Tag icon={<AiFillTool />} name="pug" title="Pug">
            {data.frontend.pug}
          </Tag>
        </Accordion>
        <Accordion name="Styling" icon={<SiCss3 />}>
          <Tag icon={<SiCss3 />} name="css" title="Css3">
            {data.frontend.css}
          </Tag>
          <Tag icon={<AiFillTool />} name="sass" title="Scss">
            {data.frontend.sass}
          </Tag>
          <Tag icon={<SiBootstrap />} name="bootstrap" title="Bootstrap">
            {data.frontend.bootstrap}
          </Tag>
          <Tag icon={<SiTailwindcss />} name="tailwind" title="Tailwind">
            {data.frontend.tailwind}
          </Tag>
          <Tag
            icon={<SiStyledComponents />}
            name="styled-components"
            title="Styled-components"
          >
            {data.frontend.styledComponents}
          </Tag>
          <Tag
            icon={<AiFillTool />}
            name="css/scss modules"
            title="Css/Scss modules"
          >
            {data.frontend.cssModule}
          </Tag>
        </Accordion>
        <Accordion name="Dynamic" icon={<SiJavascript />}>
          <Tag icon={<SiJavascript />} name="javascript" title="Javascript">
            {data.frontend.javascript}
          </Tag>
          <Tag icon={<SiTypescript />} name="typescript" title="Typescript">
            {data.frontend.typescript}
          </Tag>
          <Tag icon={<SiReact />} name="react" title="React">
            {dummyText}
          </Tag>
          <Tag icon={<SiNextDotJs />} name="nextjs" title="Neaxtjs">
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
