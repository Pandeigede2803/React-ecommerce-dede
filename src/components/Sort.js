import React from "react";
import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";
import "./sort.css";

const Sort = () => {
  const {
    sort,
    grid_view,
    filtered_products,
    setGridView,
    setListView,
    updateSort,
  } = useFilterContext();
  /***use the context***/

  return (
    <div className="section-sort">
      <div className="btn-container">
        <button type="button" onClick={setGridView} className={grid_view ? 'active' : ''}>
          <BsFillGridFill />
        </button>
        <button type="button" onClick={setListView} className={!grid_view ? 'active' : ''}>
          <BsList />
        </button>
      </div>
      <p>
        {filtered_products.length} Product Found
        {/** add info number of products found */}
      </p>
      <hr />
      <form>
        <label htmlFor="sort">Sort by: </label>
        <select
          name="sort"
          id="sort"
          className="sort-input"
          value={sort}
          onChange={updateSort}
        >
          {/* Options for sorting */}
          <option value="price-lowest">Price (Lowest)</option>
          <option value="price-highest">Price (Highest)</option>
          <option value="name-a">Name (A-Z)</option>
          <option value="name-z">Name (Z-A)</option>
        </select>

        {/** add the label and dropdown select
         *   use this value :
         *   - price-lowest
         *   - price-highest
         *   - name-a
         *   - name-z
         */}
      </form>
    </div>
  );
};

export default Sort;
