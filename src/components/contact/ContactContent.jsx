import React from "react";
import { Link } from "react-router-dom";
import { UilArrowRight } from "@iconscout/react-unicons";
import { UilEnvelopeAlt } from "@iconscout/react-unicons";
import { UilWhatsapp } from "@iconscout/react-unicons";
import { UilMobileAndroid } from "@iconscout/react-unicons";

const ContactContent = () => {
  return (
    <div className="contact__content">
      <h3 className="contact__title">Talk to me</h3>
      <div className="contact__info">
        <div className="contact__card">
          <UilEnvelopeAlt className="card__icon" />
          <h3 className="contact__card-title">Email</h3>
          <span className="contact__card-data">
            rasikajayasinghe87@gmail.com
          </span>
          <Link to={""} className="contact__button">
            Write me <UilArrowRight className="button__icon" />
          </Link>
        </div>

        <div className="contact__card">
          <UilWhatsapp className="card__icon" />
          <h3 className="contact__card-title">Whatsapp</h3>
          <span className="contact__card-data">+94 70 336 8058</span>
          <Link to={""} className="contact__button">
            Message me <UilArrowRight className="button__icon" />
          </Link>
        </div>

        <div className="contact__card">
          <UilMobileAndroid className="card__icon" />
          <h3 className="contact__card-title">Mobile</h3>
          <span className="contact__card-data">+94 70 336 8058</span>
          <Link to={""} className="contact__button">
            Call me <UilArrowRight className="button__icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
