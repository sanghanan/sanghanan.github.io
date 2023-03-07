import React from "react";
import SkillsGroup from "./SkillsGroup";

const SkillBox = ({ skillSetName, skills }) => {
  const middleIndex = Math.ceil(skills.length / 2);
  const firstHalf = skills.slice().splice(0, middleIndex);
  const secondHalf = skills.slice().splice(-middleIndex + 1);
  return (
    <div className="skills__content">
      <h3 className="skills__title">{skillSetName}</h3>

      <div className="skills__box">
        <SkillsGroup skills={firstHalf} />
        <SkillsGroup skills={secondHalf} />
      </div>
    </div>
  );
};

export default SkillBox;
