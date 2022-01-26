function FilterName(props) {
  const handleInput = (ev) => {
    props.handleFilter(ev.currentTarget.value)
  }

  return (
    <>
      <label className="form__filterName" htmlFor="name">
      Busca por personaje:
      </label>
      <input 
      className="form__input-text" 
      type="text" 
      name="name" 
      id="name"
      onChange={handleInput}
      value={props.filterName}
      />
    </>
  );
}

export default FilterName;
