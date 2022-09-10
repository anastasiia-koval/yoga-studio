import React from "react";
import "./Button.scss";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  id?: string;
  variant?: "main" | "secondary";
  type?: "submit";
}
const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={
        props.variant === "secondary" ? "secondaryButton" : "mainButton"
      }
    >
      {props.label}
    </button>
  );
};

export default Button;
