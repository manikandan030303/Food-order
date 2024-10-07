import React from "react";
import Header from "../Header";
import ExploreMenu from "../ExploreMenu";
import FoodDisplay from "../FoodDisplay";

export default function Home() {
  return (
    <div>
      <Header />
      <ExploreMenu />
      <FoodDisplay />
    </div>
  );
}
