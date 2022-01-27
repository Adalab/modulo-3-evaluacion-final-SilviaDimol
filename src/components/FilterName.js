function FilterName(props) {
  const handleInput = (ev) => {
    props.handleFilter({
      key:"name",
      value: ev.currentTarget.value,
  });
};

const handleSubmit = ev => {
  ev.preventDefault();
};

  return (
    <form onSubmit={handleSubmit}>
      <label className="form__filterName" htmlFor="name">
      Busca por personaje:
      </label>
      <input 
      className="inputName" 
      type="text" 
      name="name" 
      id="name"
      value={props.filterName}
      onChange={handleInput}
      />
    </form>
  );
}

export default FilterName;
