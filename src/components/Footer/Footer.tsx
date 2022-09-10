import React from "react";
import "./Footer.scss";
import Logo from "assets/yogaLogo.svg";
import { ReactComponent as Location } from "assets/location.svg";
import { ReactComponent as InstagramIcon } from "assets/instagram.svg";
import { ReactComponent as FacebookIcon } from "assets/facebook.svg";
import { ReactComponent as TwitterIcon } from "assets/twitter.svg";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer>
      <div className="leftFooterContent">
        <div className="logoContainer">
          <img src={Logo} alt="logo" style={{ width: "66px" }} />
          <div className="location">
            <Location />
            <p>Warsaw, Chlodna 29</p>
          </div>
        </div>
        <div className="linksContainer">
          <ul className="footerLinks">
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
          </ul>
          <ul className="footerLinks">
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
        </div>
      </div>

      <div className="rightFooterContainer">
        <div className="iconFooter">
          <InstagramIcon />
          <TwitterIcon />
          <FacebookIcon />
        </div>
        <div className="contactUsFooter">
          <p>Contact us</p>
          <p>+48 123 321 456</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
