import React from "react";
import "./Button.scss";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  id?: string;
  variant?: "main" | "secondary";
}
const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={
        props.variant === "secondary" ? "secondaryButton" : "mainButton"
      }
    >
      {props.label}
    </button>
  );
};

export default Button;
