import React from "react";
import "../components/about/about.css";
import AboutImg from "../assets/about.jpg";
import CV from "../assets/rasika-jayasinghe-Cv.pdf";
import Info from "../components/about/Info";
import { UilFileDownloadAlt } from "@iconscout/react-unicons";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about_img" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet,
            repudiandae consequuntur. Esse similique, et reprehenderit dolorum
            architecto eaque amet maiores tenetur tempore eum eos labore ab vero
            excepturi id aut!
          </p>
          <a download="" href={CV} className="button button--flex">
            Download CV{" "}
            <UilFileDownloadAlt
              className="button__icon"
              color="var(--container-color)"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
