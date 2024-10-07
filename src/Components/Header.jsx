import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="headercnt">
        <h1>
          Order your
          <br /> favirate food here
        </h1>
        <p>
          We eat with our eyes first, but before we see our food, we picture it
          while reading the menu descriptions. They say one image is worth a
          thousand words, but don’t underestimate the power of words.{" "}
        </p>
        <button>Order Now</button>
      </div>
    </div>
  );
}
