import React from "react";
import { UilArrowRight } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const WorksItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <Link href="#" className="work__button">
        Demo <UilArrowRight className="button__icon" />
      </Link>
    </div>
  );
};

export default WorksItems;
