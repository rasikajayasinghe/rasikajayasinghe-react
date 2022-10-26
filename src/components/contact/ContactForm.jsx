import React, { useRef, useState } from "react";
import { UilMessage } from "@iconscout/react-unicons";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const handleButtonClick = () => {
    setIsAlertVisible(true);

    setTimeout(() => {
      setIsAlertVisible(false);
    }, 5000);
  };

  const sendEmail = (e) => {
    handleButtonClick();
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bulo4ui",
        "template_31n62vd",
        form.current,
        "wPX-O-ZL5CNT_q-1v"
      )
      .then(
        (result) => {
          setStatusMessage("Email sent success");
        },
        (error) => {
          setStatusMessage(`${error.text} happened`);
        }
      );
  };
  return (
    <div className="contact__content">
      <h3 className="contact__title">Write me your project</h3>
      <form className="contact__form" ref={form} onSubmit={sendEmail}>
        {statusMessage && isAlertVisible && (
          <div className="message__alert">
            <p>{statusMessage}</p>
          </div>
        )}

        <div className="contact__from-wrapper">
          <label className="contact__form-label">Name *</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="contact__form-input"
          />
        </div>
        <div className="contact__from-wrapper">
          <label className="contact__form-label">Email *</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="contact__form-input"
          />
        </div>
        <div className="contact__from-wrapper contact__form-area">
          <label className="contact__form-label">Message *</label>
          <textarea
            name="message"
            cols="30"
            rows="10"
            required
            placeholder="Enter your message"
            className="contact__form-input"
          ></textarea>
        </div>
        <button href="/contact" className="button button--flex">
          Send Message
          <UilMessage className="button__icon" color="var(--container-color)" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
