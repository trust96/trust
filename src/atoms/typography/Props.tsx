import React from "react";

export interface Props {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "strong" | "i";
  children: React.ReactNode;
  className?: string;
  title?: "primary" | "secondary" | "terziary" | "quartenary";
  para?: "body1" | "body2";
  variant?: "title" | "para" | "caption" | "overline";
  color?: "subtle" | "primary";
  onClick?: () => void;
}
