import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Search(props) {
  return (
    <div className="card">
      <div className="card-body">
        <form>
          <div className="form-group">
            <label htmlFor="query">Filter by Last Name</label>
            <input
              type="text"
              className="form-control"
              id="query"
              onChange={props.onSearchChange}
              value={props.value}
            />
          </div>
        </form>
      </div>
    </div>
  );
}


export default Search;