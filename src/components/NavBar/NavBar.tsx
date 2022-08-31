import React from "react";
import Logo from "assets/yogaLogo.svg";
import { Link } from "react-scroll";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav>
      <img src={Logo} alt="logo" style={{ width: "50px" }} />
      <ul className="navbarLinks">
        <li>
          <Link spy smooth duration={500} to="classesSection">
            Classes
          </Link>
        </li>
        <li>
          <Link spy smooth duration={500} to="teamSection">
            Team
          </Link>
        </li>
        <li>
          <Link spy smooth duration={500} to="reviewSection">
            Review
          </Link>
        </li>
        <li>
          <Link spy smooth duration={500} to="contactUsSection">
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
