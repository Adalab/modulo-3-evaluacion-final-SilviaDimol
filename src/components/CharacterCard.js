import React from "react";
import { NavLink } from "react-router-dom";

function CharacterCard(props) {
  return (
    <NavLink to={`/user/${props.character.name}`}>
    <li className="card" >
      <img
        alt="cardImage"
        src={props.character.image}
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`}
      />
      <h4 className="card__title">{props.character.name}</h4>
      <p className="card__description">{props.character.species}</p>
    </li>
    </NavLink>
  );
}

export default CharacterCard;
