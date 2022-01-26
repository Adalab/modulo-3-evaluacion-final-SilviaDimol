import React, { useEffect, useState } from "react";
import "../styles/App.css";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import Header from "./Header";
import Api from "../services/Api";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("Gryffindor");

  //Fetch
  useEffect(() => {
    Api(filterHouse).then((data) => {
      setCharacters(data);
    });
  }, [filterHouse]);

  //Función manejadora de los filtros
  const handleFilter = (data) => {
    if (data.key === "name"){
      setFilterName(data.value);
    } else if (data.key === "house") {
      setFilterHouse (data.value);
    }
  };

  const filteredCharacters = characters
  .filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  })
    .filter((character) => {
    return character.house === filterHouse;
    });
  

  return (
    <>
      <Header />
      <Filters handleFilter={handleFilter} filterName={filterName} filterHouse={filterHouse}/>
      <CharacterList characters={filteredCharacters} />
    </>
  );
}

export default App;
