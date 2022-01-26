import { NavLink } from "react-router-dom";

function CharacterDetail(props) {
  return (
    <section className="cardDetail">
      <NavLink className="linkToPrincipalPage" exact to="/">
        Volver
      </NavLink>
      <img
        src={
        props.character.image === ""
        ? "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"
        : props.character.image
        }
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`}
      />
      <h4 className="card__title">{props.character.name}</h4>
      <p className="card__description">{props.character.house}</p>
      <p className="card__description">{props.character.alive === true ? "vivx" : "muertx"}</p>
      <p className="card__description">{props.character.gender}</p>
      <p className="card__description">{props.character.species}</p>
      <p className="card__description">{props.character.alternate_names}</p>
    </section>
  );
}

export default CharacterDetail;
