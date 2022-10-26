import React from "react";
import "../components/services/services.css";
import ServicesContent from "../components/services/ServicesContent";

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <ServicesContent />
      </div>
    </section>
  );
};

export default Services;
