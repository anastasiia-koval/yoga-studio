import React from "react";
import "./Header.scss";

interface HeaderProps {
  text: string;
}
const Header = ({ text }: HeaderProps) => {
  return <h2 className="sectionHeader">{text}</h2>;
};

export default Header;
