const Api = () => {
    return fetch('http://hp-api.herokuapp.com/api/characters/house/gryffindor')
      .then((response) => response.json())
      .then((data) => {
        return data.map((character => {
            console.log(character);
        return {
            image: character.image,
            name: character.name,
            species: character.secies,
            house: character.house
        };
      }));
    });
  };
  export default Api;