import React from "react";
import { SiBootstrap } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { SiCodeigniter } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { SiShopify } from "react-icons/si";
import { SiMagento } from "react-icons/si";

const FrameWorksSkillsData = [
  {
    id: "1",
    icon: <SiBootstrap className="skill-logo" />,
    skillName: "Bootstrap",
    skillLevel: "Advanced",
  },
  {
    id: "2",
    icon: <SiMaterialui className="skill-logo" />,
    skillName: "Material UI",
    skillLevel: "Advanced",
  },
  {
    id: "3",
    icon: <SiLaravel className="skill-logo" />,
    skillName: "Laravel",
    skillLevel: "Intermediate",
  },
  {
    id: "4",
    icon: <SiCodeigniter className="skill-logo" />,
    skillName: "Codeigniter",
    skillLevel: "Intermediate",
  },
  {
    id: "5",
    icon: <SiReact className="skill-logo" />,
    skillName: "ReactNative",
    skillLevel: "Intermediate",
  },
  {
    id: "6",
    icon: <SiFlutter className="skill-logo" />,
    skillName: "Flutter",
    skillLevel: "Intermediate",
  },
  {
    id: "7",
    icon: <SiShopify className="skill-logo" />,
    skillName: "Shopify",
    skillLevel: "Intermediate",
  },
  {
    id: "8",
    icon: <SiMagento className="skill-logo" />,
    skillName: "Magento",
    skillLevel: "Advanced",
  },
];

const FrameWorks = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frame Works</h3>
      <div className="skills__box">
        <div className="skills__group">
          {FrameWorksSkillsData.map((FrameWorkSkill, index) => (
            <div className="skills__data" key={FrameWorkSkill.id}>
              {FrameWorkSkill.icon}
              <div>
                <h3 className="skills__name">{FrameWorkSkill.skillName}</h3>
                <span className="skills__level">
                  {FrameWorkSkill.skillLevel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrameWorks;
