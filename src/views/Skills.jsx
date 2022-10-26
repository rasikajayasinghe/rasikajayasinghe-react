import React from "react";
import "../components/skills/skills.css";
import FrontEnd from "../components/skills/FrontEnd";
import Design from "../components/skills/Design";
import BackEnd from "../components/skills/BackEnd";
import FrameWorks from "../components/skills/FrameWorks";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <FrontEnd />
        <BackEnd />
        <FrameWorks />
        <Design />
      </div>
    </section>
  );
};

export default Skills;
