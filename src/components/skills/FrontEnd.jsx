import React from "react";
import { TbBrandCss3 } from "react-icons/tb";
import { DiJqueryLogo } from "react-icons/di";
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";

const FrontEndSkillsData = [
  {
    id: "1",
    icon: <TbBrandHtml5 className="skill-logo" />,
    skillName: "HTML5",
    skillLevel: "Advanced",
  },
  {
    id: "2",
    icon: <TbBrandCss3 className="skill-logo" />,
    skillName: "CSS",
    skillLevel: "Advanced",
  },
  {
    id: "3",
    icon: <TbBrandJavascript className="skill-logo" />,
    skillName: "JavaScript",
    skillLevel: "Intermediate",
  },
  {
    id: "4",
    icon: <TbBrandReactNative className="skill-logo" />,
    skillName: "React",
    skillLevel: "Intermediate",
  },
  {
    id: "5",
    icon: <DiJqueryLogo className="skill-logo" />,
    skillName: "JQuery",
    skillLevel: "Intermediate",
  },
  {
    id: "6",
    icon: <TbBrandGithub className="skill-logo" />,
    skillName: "Git",
    skillLevel: "Intermediate",
  },
];

const FrontEnd = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          {FrontEndSkillsData.map((FrontEndSkill, index) => (
            <div className="skills__data" key={FrontEndSkill.id}>
              {FrontEndSkill.icon}
              <div>
                <h3 className="skills__name">{FrontEndSkill.skillName}</h3>
                <span className="skills__level">
                  {FrontEndSkill.skillLevel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrontEnd;
