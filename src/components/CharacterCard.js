import React from "react";
import { NavLink } from "react-router-dom";

function CharacterCard(props) {
  return (
    <NavLink to={`/character/${props.character.name}`}>
      <img
        alt="cardImage"
        src={props.character.image}
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`}
      />
      <h4 className="card__title">{props.character.name}</h4>
      <p className="card__description">{props.character.species}</p>
    </NavLink>
  );
}

export default CharacterCard;
