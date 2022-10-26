import React from "react";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilFacebook } from "@iconscout/react-unicons";
import { UilLinkedinAlt } from "@iconscout/react-unicons";
import { UilYoutube } from "@iconscout/react-unicons";
import "../shared/social.css";

const SocialMediaLins = [
  {
    id: "1",
    icon: <UilInstagram className="icon" />,
    title: "Instagram",
    link: "https://www.instagram.com/rasikajayasinghe87/",
  },
  {
    id: "2",
    icon: <UilFacebook className="icon" />,
    title: "Facebook",
    link: "https://www.facebook.com/rasikajayasingha",
  },
  {
    id: "3",
    icon: <UilLinkedinAlt className="icon" />,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/rasika-jayasinghe/",
  },
  {
    id: "4",
    icon: <UilYoutube className="icon" />,
    title: "Youtube",
    link: "https://www.youtube.com/channel/UCxNOHgGSCRYpLPXg34EWR7A",
  },
];

const Social = () => {
  return (
    <div className="social">
      {SocialMediaLins.map((socialLink, index) => (
        <a
          href={socialLink.link}
          className="social__icon"
          target="_blank"
          rel="noreferrer"
          key={socialLink.id}
        >
          {socialLink.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
