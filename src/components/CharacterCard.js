function CharacterCard (props) {
    return (
        <li className="card">
        <img
          className="card__img"
          src={props.user.image}
          alt={`Foto de ${props.user.name}`}
          title={`Foto de ${props.user.name}`}
        />
        <h4 className="card__title">{props.user.name}</h4>
        <p className="card__description">{props.user.city} / {props.user.gender}</p>
      </li>
    );
}

export default CharacterCard;