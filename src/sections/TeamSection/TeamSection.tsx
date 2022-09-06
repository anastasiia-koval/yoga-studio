import React from "react";
import { Header, MemberCard } from "components";
import teamMember1 from "assets/teammember1.png";
import teamMember3 from "assets/teammember3.png";
import teamMember2 from "assets/teammember2.png";
import "./TeamSection.scss";

const TeamSection = () => {
  return (
    <div id="teamSection">
      <Header text="Our Team" />
      <div className="teamMemberContainer">
        <MemberCard
          imgSrc={teamMember1}
          title="Theresa Webb"
          description="A yoga woman and an actress. Always on the move. 
          She checks and tries to combine various forms of traffic to give you the best!"
          borderRadius="topL-btmR"
        />
        <MemberCard
          border
          imgSrc={teamMember2}
          title="Floyd Miles"
          description="Hello, I’m a yoga guru with 10 year of experience. Want to help feel you yourself!"
          borderRadius="btm"
        />
        <MemberCard
          imgSrc={teamMember3}
          title="Jenny Wilson"
          description="Dancer, instructor. She values diligence, concentration
          and at the same time she does not lack distance and sense of humor."
          borderRadius="topR-btmL"
        />
      </div>
    </div>
  );
};

export default TeamSection;
