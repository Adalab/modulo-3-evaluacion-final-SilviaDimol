import { NavLink } from "react-router-dom";

function CharacterDetail(props) {
  return (
    <section className="cardDetail">
      <NavLink className="linkToPrincipalPage" exact to="/">
        Volver
      </NavLink>
      <img
        alt="cardImage"
        src={props.character.image}
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`}
      />
      <h4 className="card__title">{props.character.name}</h4>
      <p className="card__description">{props.character.house}</p>
      <p className="card__description">{props.character.alive}</p>
      <p className="card__description">{props.character.gender}</p>
      <p className="card__description">{props.character.species}</p>
      <p className="card__description">{props.character.alternate_names}</p>
    </section>
  );
}

export default CharacterDetail;
