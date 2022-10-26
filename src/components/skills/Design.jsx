import React from "react";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobeaudition } from "react-icons/si";

const designSkillsData = [
  {
    id: "1",
    icon: <SiAdobephotoshop className="skill-logo" />,
    skillName: "Photoshop",
    skillLevel: "Advanced",
  },
  {
    id: "2",
    icon: <SiAdobeillustrator className="skill-logo" />,
    skillName: "Illustrator",
    skillLevel: "Advanced",
  },
  {
    id: "3",
    icon: <SiFigma className="skill-logo" />,
    skillName: "Figma",
    skillLevel: "Intermediate",
  },
  {
    id: "4",
    icon: <SiAdobepremierepro className="skill-logo" />,
    skillName: "Premiere Pro",
    skillLevel: "Intermediate",
  },
  {
    id: "5",
    icon: <SiAdobeaftereffects className="skill-logo" />,
    skillName: "After Effects",
    skillLevel: "Basic",
  },
  {
    id: "6",
    icon: <SiAdobeaudition className="skill-logo" />,
    skillName: "Audition",
    skillLevel: "Intermediate",
  },
];

const Design = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Design, Video & Audio Tools</h3>
      <div className="skills__box">
        <div className="skills__group">
          {designSkillsData.map((designSkill, index) => (
            <div className="skills__data" key={designSkill.id}>
              {designSkill.icon}
              <div>
                <h3 className="skills__name">{designSkill.skillName}</h3>
                <span className="skills__level">{designSkill.skillLevel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Design;
