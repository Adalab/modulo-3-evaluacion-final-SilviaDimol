import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import Api from "../services/Api";

function App() {
  const [characters, setCharacters] = useState([]);
    useEffect(() => {
      Api().then(data => {setCharacters(data); });
}, []);

  return (
    <>
      <header>
        <h1>Harry Potter</h1>
      </header>
      <main>
       <Filters/>
       <CharacterList characters={characters}/>
      </main>
      </>
      );
}

export default App;
