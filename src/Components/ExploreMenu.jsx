import React from "react";
import { useState } from "react";
import Img1 from "../Assets/dosa.png";
import Img2 from "../Assets/briyani.png";
import Img3 from "../Assets/momo.png";
import Img8 from "../Assets/briyani.png";
import "./ExploreMenu.css";
export default function ExploreMenu() {
  const [category, setCategory] = useState("All");
  const Menulist = [
    {
      id: 1,
      img: Img1,
      title: "Dosa",
    },
    {
      id: 2,
      img: Img2,
      title: "Briyani",
    },
    {
      id: 3,
      img: Img3,
      title: " Momos",
    },
    {
      id: 3,
      img: Img1,
      title: "Momos",
    },
    {
      id: 2,
      img: Img3,
      title: "Veg Rice",
    },
    {
      id: 6,
      img: Img3,
      title: "Briyani",
    },
    {
      id: 7,
      img: Img1,
      title: "Briyani",
    },
    {
      id: 8,
      img: Img8,
      title: "Briyani",
    },
    {
      id: 9,
      img: Img2,
      title: "Briyani",
    },
    {
      id: 10,
      img: Img1,
      title: "Briyani",
    },
  ];
  return (
    <div className="exploremenu">
      <h1>Explore our Menu</h1>
      <p className="exploremenu-text">
        Delicious and Exciting Falavur Foods available in the menu
      </p>
      <div className="constdata">
        {Menulist.map((item, index) => {
          return (
            <div
              className="explore-menu-list-item"
              onClick={() =>
                setCategory((prev) => (prev === item.id ? "All" : item.id))
              }
              key={index}
            >
              <img
                className={category === item.img ? "active" : ""}
                id="ex-img"
                src={item.img}
                alt=""
              />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}
