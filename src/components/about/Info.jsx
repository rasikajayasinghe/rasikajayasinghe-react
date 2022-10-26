import React from "react";
import { UilAwardAlt } from "@iconscout/react-unicons";
import { UilBriefcaseAlt } from "@iconscout/react-unicons";
import { UilHeadphonesAlt } from "@iconscout/react-unicons";

const infoData = [
  {
    id: "1",
    icon: <UilAwardAlt className="about__icon" />,
    title: "Experience",
    subTitle: "8 Years Working",
  },
  {
    id: "2",
    icon: <UilBriefcaseAlt className="about__icon" />,
    title: "Completed",
    subTitle: "48+ Project",
  },
  {
    id: "3",
    icon: <UilHeadphonesAlt className="about__icon" />,
    title: "Support",
    subTitle: "Online 24/7",
  },
];

const Info = () => {
  return (
    <div className="about__info grid">
      {infoData.map((info, index) => (
        <div className="about__box" key={info.id}>
          {info.icon}
          <h3 className="about__title">{info.title}</h3>
          <span className="about__subtitle">{info.subTitle}</span>
        </div>
      ))}
    </div>
  );
};

export default Info;
