import React from "react";
import { DiPhp } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { IoLogoPython } from "react-icons/io";

const BackEndSkillData = [
  {
    id: "1",
    icon: <DiPhp className="skill-logo" />,
    skillName: "PHP",
    skillLevel: "Intermediate",
  },
  {
    id: "2",
    icon: <DiMysql className="skill-logo" />,
    skillName: "MySql",
    skillLevel: "Intermediate",
  },
  {
    id: "3",
    icon: <DiNodejsSmall className="skill-logo" />,
    skillName: "NodeJs",
    skillLevel: "Basic",
  },
  {
    id: "4",
    icon: <IoLogoPython className="skill-logo" />,
    skillName: "Python",
    skillLevel: "Basic",
  },
];

const BackEnd = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          {BackEndSkillData.map((BackEndSkillData, index) => (
            <div className="skills__data" key={BackEndSkillData.id}>
              {BackEndSkillData.icon}
              <div>
                <h3 className="skills__name">{BackEndSkillData.skillName}</h3>
                <span className="skills__level">
                  {BackEndSkillData.skillLevel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackEnd;
