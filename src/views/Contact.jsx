import React from "react";
import "../components/contact/contact.css";
import ContactContent from "../components/contact/ContactContent";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact me</span>

      <div className="contact__container container grid">
        <ContactContent />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
