import React from "react";
import "../components/not-found/not-found.css";

const NotFound = () => {
  return (
    <section className="notFound section" id="notFound">
      <div className="notFound__container container grid">
        <h2 className="notFound__title">404</h2>
        <span className="section__subtitle">Oops, No Results Found!</span>
      </div>
    </section>
  );
};

export default NotFound;
