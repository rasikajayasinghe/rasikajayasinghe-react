import React from "react";
import "./modal.css";
import { UilTimes } from "@iconscout/react-unicons";

const Modal = ({ data, closeModal, show, children }) => {
  const showHideClassName = show ? "modal open-modal" : "modal ";

  return (
    <div className={showHideClassName}>
      <div className="modal__content">
        <UilTimes className="modal__close" onClick={closeModal} />
        <h3 className="modal__title">
          {`${data.category} ${data.serviceName}`}
        </h3>
        {children}
      </div>
    </div>
  );
};

export default Modal;
