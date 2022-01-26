const Api = (house) => {
    return fetch('http://hp-api.herokuapp.com/api/characters/house/' + house)
      .then((response) => response.json())
      .then((data) => {
        return data.map((character => {
            console.log(character);
        return {
            image: character.image,
            name: character.name,
            species: character.species,
            house: character.house,
            alternate_names: character.alternate_names,
            alive: character.alive,
            gender: character.gender
        };
      }));
    });
  };
  export default Api;