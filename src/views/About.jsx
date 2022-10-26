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
            I am Interested in using technology to connect people and businesses
            and willing to take up any challenges to improve myself. I am an
            Artificial Intelligence enthusiast and I like to experiment with new
            and upcoming technologies during my free time. With the 6 years’
            experience as a web developer I have hands on expertise of HTML5,
            CSS3, SASS, LESS, JavaScript, jQuery, Angular js, React js, Node js
            ,Grunt, bower, Bootstrap, Ruby, joomla, wordpress, magento, Zencart
            framework, php, Mysql, .net and I’m currently looking for an
            opportunity to work as a web developer in a company which helps to
            grow and extend personal horizons.
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
