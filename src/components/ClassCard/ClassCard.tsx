import React from "react";
import "./ClassCard.scss";

const ClassCard = (props: {
  title: string;
  subText: string;
  borderRadius: "topR-btmL" | "topL-btmR";
  headerPosition?: "top" | "bottom";
}) => {
  return (
    <div
      className="cleverCard"
      style={
        props.borderRadius === "topR-btmL"
          ? { borderRadius: "0px 150px" }
          : { borderRadius: "150px 0px" }
      }
    >
      {(props.headerPosition === "top" || !props.headerPosition) && (
        <h3
          className="cleverHeader"
          style={
            props.borderRadius === "topR-btmL"
              ? { textAlign: "start" }
              : { textAlign: "end" }
          }
        >
          {props.title}
        </h3>
      )}
      <p className="cleverDescription">{props.subText}</p>
      {props.headerPosition === "bottom" && (
        <h3
          className="cleverHeader"
          style={
            props.borderRadius === "topR-btmL"
              ? { textAlign: "start" }
              : { textAlign: "end" }
          }
        >
          {props.title}
        </h3>
      )}
    </div>
  );
};
export default ClassCard;
