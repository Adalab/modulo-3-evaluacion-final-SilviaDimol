import '../styles/App.css';
import Filters from "./Filters";
import CharacterList from "./CharacterList";

function App() {
  return (
    <body>
      <header>
        <h1>Harry Potter</h1>
      </header>
      <main>
       <Filters/>
       <CharacterList/>
      </main>
      </body>
      );
}

export default App;
