import React from "react";
import { HeroList } from "../ui/heroes/HeroList";

export const MarvelPage = () => {
  return (
    <div>
      <h1>Marvel Heroes</h1>
      <hr />
      <HeroList publisher="Marvel Comics" />
    </div>
  );
};
