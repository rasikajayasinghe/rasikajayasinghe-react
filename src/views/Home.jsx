import React from "react";
import Social from "../components/shared/Social";
import HomeHero from "../components/home/HomeHero";
import "../components/home/home.css";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <HomeHero />
        </div>
      </div>
    </section>
  );
};

export default Home;
