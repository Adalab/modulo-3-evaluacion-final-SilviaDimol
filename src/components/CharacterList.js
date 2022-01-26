import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  const characterElements = props.characters.map((character, index) => {
    return (
      <li key={index}>
        <CharacterCard character={character} />
      </li>
    );
  });

  return <ul className="cards">{characterElements}</ul>;
}

export default CharacterList;
