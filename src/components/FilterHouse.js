function FilterHouse(props) {
const handleHouse = (ev) => {
    props.handleFilter ({
        key: "house",
        value: ev.target.value,
    });
};

  return (
    <>
      <label className="form__filterHouse" htmlFor="house">
        Selecciona la casa:
      </label>
      <select className="form__input-text" name="house" id="house" onChange={handleHouse} value={props.filterHouse}>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
      </select>
    </>
  );
}

export default FilterHouse;
