import styles from "./typography.module.scss";

import classnames from "classnames";
import { HTMLAttributes } from "react";

type TypographyProps = {
  text: string;
  variant:
    | "title1"
    | "title2"
    | "title3"
    | "headline"
    | "subheadline"
    | "body"
    | "label";
  bold?: boolean;
  size?: "medium" | "small" | "large";
  uppercase?: boolean;
  color?: string;
};

const Typography = ({
  variant,
  bold = false,
  size = "medium",
  text,
  uppercase,
  color,
}: TypographyProps) => {
  const className = classnames(
    styles.typography,
    styles[variant],
    styles[`color-${color}`],
    {
      [styles[size]]: !!size,
      [styles.uppercase]: uppercase,
      [styles.bold]: bold,
    }
  );

  const style: Record<string, string> = { color: color || "" };

  const attributes: HTMLAttributes<HTMLElement> = {
    className,
    style,
  };

  if (variant.includes("title")) {
    switch (variant) {
      case "title1":
        return <h1 {...attributes}>{text}</h1>;
      case "title2":
        return <h2 {...attributes}>{text}</h2>;
      case "title3":
        return <h3 {...attributes}>{text}</h3>;
    }
  }

  if (variant === "body") {
    return <p {...attributes}>{text}</p>;
  }

  return <span {...attributes}>{text}</span>;
};

export default Typography;
