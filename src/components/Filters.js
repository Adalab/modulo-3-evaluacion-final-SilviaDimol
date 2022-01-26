import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";

function Filters (props) {
  return (
    <>
      <FilterName handleFilter={props.handleFilter} filterName={props.filterName}/>
      <FilterHouse />
    </>
  );
}

export default Filters;
