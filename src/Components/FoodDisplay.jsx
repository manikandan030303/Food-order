import React, { useState } from "react";
import Img1 from "../Assets/card1.jpg";
import Img2 from "../Assets/card2.jpg";
import Img3 from "../Assets/card5.jpg";
import "./FoodDisplay.css";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import plusr from '../Assets/plus-r.png'
import minusr from '../Assets/minus-r.webp'
import plus from '../Assets/plus1.png'
export default function FoodDisplay() {
    const [itemCount,setItemCount]=useState(1);
  const FoodItem = [
    {
      id: 1,
      name: "Spicy Chicken",
      price: "$ 200",
      discription:
        "The breading adds a crisp coating or crust to the exterior .",
      img: Img1,
    },
    {
      id: 1,
      name: "Spicy Chicken",
      price: "$ 200",
      discription:
        "The breading adds a crisp coating or crust to the exterior .",
      img: Img2,
    },
    {
      id: 1,
      name: "Spicy Chicken",
      price: "$ 200",
      discription:
        "The breading adds a crisp coating or crust to the exterior.",
      img: Img3,
    },
    {
      id: 1,
      name: "Spicy Chicken",
      price: "$ 200",
      discription:
        "The breading adds a crisp coating or crust to the exterior.",
      img: Img1,
    },
    {
      id: 1,
      name: "Spicy Chicken",
      price: "$ 200",
      discription:
        "The breading adds a crisp coating or crust to the exterior.",
      img: Img2,
    },
    {
      id: 1,
      name: "Spicy Chicken",
      price: "$ 200",
      discription:
        "The breading adds a crisp coating or crust to the exterior .",
      img: Img3,
    },
    {
      id: 1,
      name: "Spicy Chicken",
      price: "$ 200",
      discription:
        "The breading adds a crisp coating or crust to the exterior .",
      img: Img1,
    },
    {
      id: 1,
      name: "Spicy Chicken",
      price: "$ 280",
      discription:
        "The breading adds a crisp coating or crust to the exterior .",
      img: Img2,
    },
    {
      id: 1,
      name: "Spicy Chicken",
      price: "$ 200",
      discription:
        "The breading adds a crisp coating or crust to the exterior .",
      img: Img3,
    },
    {
      id: 1,
      name: "Spicy Chicken",
      price: "$ 200",
      discription:
        "The breading adds a crisp coating or crust to the exterior .",
      img: Img1,
    },
    {
      id: 1,
      name: "Spicy Chicken",
      price: "$ 200",
      discription:
        "The breading adds a crisp coating or crust to the exterior.",
      img: Img2,
    },
    {
      id: 1,
      name: "Spicy Chicken",
      price: 200,
      discription:
        "The breading adds a crisp coating or crust to the exterior .",
      img: Img2,
    },
  ];
  return (
    <div>
      <h2 style={{ color: "rgb(69, 64, 64)" }}>Top Dishes Near you</h2>
      <div className="cnt-lists">
        {FoodItem.map((item, index) => {
          return (
            <div className="lists">
              <img src={item.img} alt="" height={120} width={170} />

              <h5>{item.name}</h5>
              <div className="star">
                <BsStarFill className="text-brightColor" />
                <BsStarFill className="text-brightColor" />
                <BsStarFill className="text-brightColor" />
                <BsStarFill className="text-brightColor" />
                <BsStarHalf className="text-brightColor" />
              </div>
              {/* {
                !itemCount
                     ?<img src={plus} alt="" onClick={()=>setItemCount(prev=>prev+1)} className="add" height={20} />
                     : <div className="foot-tem-count" >
                        <img src={plusr} onClick={()=>setItemCount(prev=>prev+1)} alt="" height={15} width={20}/>
                        <p>{itemCount}</p>
                        <img src={minusr} onClick={()=>setItemCount(prev=>prev-1)} alt="" height={20} width={20} />
                     </div>
              } */}

              <p>{item.discription}</p>
              <div className="price-order">
                <h6 className="price">{item.price}</h6>
                <button className="order">Order</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
