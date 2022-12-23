import React from "react";
import "./card-list.component.css";

export const CardList = (props) => {
  return (
    <div id="cardListContainer">
      {props.monsters.map((monster) => (
        <h1 key={monster.id}>{monster.name}</h1>
      ))}
    </div>
  );
};
