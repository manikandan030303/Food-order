import React, { useState } from "react";
import foodie from "../Assets/Foodi.png";
import search from "../Assets/images.png";
import basket from "../Assets/basket.png";
import "./Navbar.css";
export default function Navbar({handleOrderPopup}) {
  const [menu, setMenu] = useState("menu");
  return (
    <div className="navbar">
      <img src={foodie} alt="" className="logonav" height={40} />
      <ul className="menu-list">
        <li
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("Foods")}
          className={menu === "Foods" ? "active" : ""}
        >
          Foods
        </li>
        <li
          onClick={() => setMenu("Contact")}
          className={menu === "Contact" ? "active" : ""}
        >
          Contact
        </li>
        <li
          onClick={() => setMenu("Help")}
          className={menu === "Help" ? "active" : ""}
        >
          Help
        </li>
        <li
          onClick={() => setMenu("Premium")}
          className={menu === "Premium" ? "active" : ""}
        >
          premium
        </li>
      </ul>
      <div className="icons-right">
        <img src={search} alt="" height={30} />
        <div className="basket-dot">
          <img src={basket} alt="" height={30} />
          <div className="dot"></div>
        </div>
        <button onClick={()=> handleOrderPopup(true)} className="btn-log">Sign in</button>
      </div>
    </div>
  );
}
