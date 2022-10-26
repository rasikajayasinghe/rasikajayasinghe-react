import React, { useState } from "react";
import { UilArrowRight } from "@iconscout/react-unicons";
import { UilCheckCircle } from "@iconscout/react-unicons";
import { servicesContentData } from "./Data";
import Modal from "../shared/Modal";

const ServicesContent = () => {
  const [data, setData] = useState(null);
  const [visible, setVisible] = useState(false);

  const toggleItem = (servicesItem = null) => {
    setData(servicesItem);
    setVisible(servicesItem !== null);
  };
  return (
    <>
      {servicesContentData.map((services, index) => (
        <div className="services__content" key={services.id}>
          <div>
            {services.icon}
            <h3 className="services__title">
              {services.category} <br />
              {services.serviceName}
            </h3>
            <span
              className="services__button"
              onClick={() => toggleItem(services)}
            >
              View More <UilArrowRight className="button__icon" />
            </span>
          </div>
        </div>
      ))}
      {visible === true && data !== null && (
        <Modal closeModal={() => toggleItem()} data={data} show={visible}>
          <p className="modal__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            ab aspernatur ut dolor dignissimos rem dolorem. Distinctio sit,
            tempore inventore reprehenderit cupiditate praesentium nobis id iste
            minima perferendis reiciendis animi.
          </p>
          <ul className="modal__service grid">
            {data.serviceList.map((item, index) => (
              <li className="modal__service-list" key={item.id}>
                <UilCheckCircle className="modal__icon" />
                <p className="services__modal-info">{item.title}</p>
              </li>
            ))}
          </ul>
        </Modal>
      )}
    </>
  );
};

export default ServicesContent;
