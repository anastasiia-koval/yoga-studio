import React from "react";
import "./MemberCard.scss";
import { ReactComponent as Border } from "assets/borderTeam.svg";

interface MemberCardProp {
  imgSrc: string;
  title: string;
  description: string;
  borderRadius: "topL-btmR" | "btm" | "topR-btmL";
  border?: boolean;
}
const MemberCard = (props: MemberCardProp) => {
  return (
    <div className="memberCard">
      {props.border && (
        <Border
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
          }}
        />
      )}
      <div
        className="cardContent"
        style={
          props.borderRadius === "topL-btmR"
            ? { borderRadius: "100px 0px" }
            : props.borderRadius === "btm"
            ? { borderRadius: "0px 0px 100px 100px" }
            : { borderRadius: "0px 100px" }
        }
      >
        <img
          src={props.imgSrc}
          alt="image1"
          style={
            props.borderRadius === "topL-btmR"
              ? { borderRadius: "100px 0px" }
              : props.borderRadius === "btm"
              ? { borderRadius: "0px 0px 100px 100px" }
              : { borderRadius: "0px 100px" }
          }
        />

        <div className="cardOverlay">
          <div className="cardHeader">
            <p>{props.title}</p>
          </div>
          <p className="cardDescription">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
