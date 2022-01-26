import React, { useEffect, useState } from "react";
import "../styles/App.css";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import Header from "./Header";
import Api from "../services/Api";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("");

  useEffect(() => {
    Api().then((data) => {
      setCharacters(data);
    });
  }, []);

  const handleFilter = (data) => {
    setFilterName(data)
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  return (
    <>
      <Header />
      <Filters handleFilter={handleFilter} filterName={filterName}/>
      <CharacterList characters={filteredCharacters} />
    </>
  );
}

export default App;
