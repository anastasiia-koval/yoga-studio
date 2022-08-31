import React from "react";
import { Header, ClassCard, Button } from "components";
import "./ClassesSection.scss";
import { ReactComponent as CleverLine } from "assets/cleverLine.svg";
import { ReactComponent as BackgroundLines } from "assets/backgroundLines.svg";

const ClassesSection = () => {
  return (
    <div className="classesSection">
      <div className="cleverContent">
        <Header text="Classes" />
        <div className="cleverBox">
          <div className="cleverTopRow">
            <ClassCard
              borderRadius="topR-btmL"
              title="Hatha yoga"
              subText="There are branches of yoga such as kriya, raja, 
            and karma yoga that are separate from the physical-based yoga practice. 
            The physical-based yoga is the most popular and has numerous styles."
            />
            <ClassCard
              borderRadius="topL-btmR"
              title="Ashtanga yoga"
              subText='In Sanskrit, ashtanga is translated as "Eight Limb path." In
            Mysore, India, people gather to practice this form of yoga
            together at their own pace—if you see Mysore-led ashtanga.'
            />
          </div>
          <div className="cleverBottomRow">
            <ClassCard
              headerPosition="bottom"
              borderRadius="topL-btmR"
              title="Yin yoga"
              subText="Yin yoga is a slow-paced style of yoga with seated postures that are held 
            for longer periods of time. Yin can also be a meditative yoga practice that helps 
            you find inner peace."
            />
            <ClassCard
              headerPosition="bottom"
              borderRadius="topR-btmL"
              title="Kundalini yoga"
              subText='In Sanskrit, ashtanga is translated as "Eight Limb path." In
            Mysore, India, people gather to practice this form of yoga
            together at their own pace—if you see Mysore-led ashtanga.'
            />
          </div>
        </div>
        <CleverLine
          style={{
            position: "absolute",
            left: "60px",
            right: 0,
            top: "650px",
            bottom: 0,
            margin: "auto",
          }}
        />
      </div>
      <div className="chooseClassContainer">
        <p>Don’t know what class to choose?</p>
        <p style={{ marginBottom: "70px", marginTop: "18px" }}>
          Let’s find out together!
        </p>
        <Button label="Pass the test" variant="secondary" />

        {/* <BackgroundLines style={{ position: "absolute" }} /> */}
      </div>
    </div>
  );
};

export default ClassesSection;
