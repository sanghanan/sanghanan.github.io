import React from "react";
import "./skills.css";

const SkillsGroup = ({ skills }) => {
  return (
    <div className="skills__group">
      {skills.map((skill, index) => {
        return (
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name" key={index}>
                {skill}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsGroup;
