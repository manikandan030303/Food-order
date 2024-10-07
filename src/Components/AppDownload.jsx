import React from "react";
import appimg from "../Assets/app1.png";
import appimg2 from "../Assets/app2.png";
import "./ApDownload.css";
export const AppDownload = () => {
  return (
    <div className="app-download">
      <p>
        For Better Download Experience <br /> Foodi App
      </p>
      <div className="app-img">
        <img src={appimg2} alt="" />
        <img src={appimg} alt="" />
      </div>
    </div>
  );
};
