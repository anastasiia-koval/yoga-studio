import React from "react";
import mainPic from "assets/mainPic.png";
import { Button } from "components";
import { Link } from "react-scroll";
import "./Landing.scss";
import { ReactComponent as Border } from "assets/border.svg";
import { ReactComponent as Location } from "assets/location.svg";
import { ReactComponent as InstagramIcon } from "assets/instagram.svg";
import { ReactComponent as FacebookIcon } from "assets/facebook.svg";
import { ReactComponent as TwitterIcon } from "assets/twitter.svg";

const Landing = () => {
  return (
    <div className="mainContainer">
      <div className="landingContainer">
        <div style={{ position: "relative" }}>
          <img
            src={mainPic}
            alt="mainPicture"
            style={{ width: "500px", height: "auto" }}
          />
          <Border
            style={{ position: "absolute", left: "10px", top: "-20px" }}
          />
        </div>

        <div className="landingText">
          <p className="title">Find mental balance</p>
          <p className="description">
            Sign up for a trial lesson and feel how you open up to a new
          </p>
          <Link to="">
            <Button label="Sign up" variant="main" />
          </Link>
        </div>
      </div>
      <div className="infoContainer">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "end",
          }}
        >
          <Location />
          <p style={{ margin: 0 }}>Warsaw, Chlodna 29</p>
        </div>
        <div className="iconContainer">
          <InstagramIcon />
          <TwitterIcon />
          <FacebookIcon />
        </div>
      </div>
    </div>
  );
};

export default Landing;
