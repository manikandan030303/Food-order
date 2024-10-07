import React from "react";
import logo from "../Assets/Foodi.png";
import "./Footer.css";
import { CiFacebook  } from "react-icons/ci";
 import { FaWhatsapp,FaInstagram,FaLinkedin } from "react-icons/fa";
 
export default function Footer() {
  return (
    <div className="footer">
      <div className="right">
        <img src={logo} alt="" />
        <p className="footcnt">
          The breading adds a crisp coating or crust to the exterior of the
          chicken while retaining juices in the meat
        </p>
        <div className="community">
        <CiFacebook />
        <FaInstagram />
        <FaLinkedin />
        <FaWhatsapp />
        </div>
      </div>
      <div className="middle">
        <h3>Company</h3>
        <p>Hme</p>
        <p>About us</p>
        <p>Help</p>
        <p>Customer Support</p>
      </div>
      <div className="left">
        <h3>Get in Touch</h3>
        <p>+91 235254724</p>
        <p>mankd@gmail.com</p>
      </div>
    </div>
  );
}
