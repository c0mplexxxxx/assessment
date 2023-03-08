import React, {useState} from "react";
import "./popup.scss";
import check from "./check.png";
const Popup = ({setShow}) => {
  const handleClick = () => {
    setShow(prev => !prev);
  }
  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup__heading">Congratulations</div>
        <div className="popup__main">
          <img src={check} alt="check" />
          <p>Your changes have been updated successfully ! </p>
        </div>
        <div className="popup__footer">
          <button className="popup-btn" onClick={() => handleClick()}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
