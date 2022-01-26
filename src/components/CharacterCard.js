import React from "react";

function CharacterCard(props) {
  return (
    <li className="card">
      <img
        alt="cardImage"
        src={props.character.image}
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`}
      />
      <h4 className="card__title">{props.character.name}</h4>
      <p className="card__description">{props.character.species}</p>
    </li>
  );
}

export default CharacterCard;
