import React from "react";
import { AiFillAccountBook } from "react-icons/ai";
import { SiTypescript } from "react-icons/si";
import Tag from "../atoms/tag";
import Card from "../molecules/card";
import styles from "../style/stack.module.scss";
const dummyText =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos asperiores laboriosam optio eveniet cupiditate fugit, eos totam quidem eius doloribus esse repudiandae officia quos assumenda rerum dolore soluta laborum in? Laborum hic recusandae tempora vel, aliquam saepe sint minus possimus neque similique quos suscipit facilis consequuntur? Veniam incidunt eveniet illum earum ";
interface Props {}

const mystack = (props: Props) => {
  return (
    <div>
      {
        // frontend
      }
      <Card
        tag={
          <Tag name="typescript" icon={<SiTypescript />} title="typescript">
            {dummyText}
          </Tag>
        }
        title="frontend"
      >
        childe mad
      </Card>
    </div>
  );
};

export default mystack;
