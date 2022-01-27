import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";

function Filters (props) {
  return (
    <section className="filters">
      <FilterName handleFilter={props.handleFilter} filterName={props.filterName}/>
      <FilterHouse handleFilter={props.handleFilter} filterHouse={props.filterHouse}/>
    </section>
  );
}

export default Filters;
