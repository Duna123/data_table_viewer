import React from "react";

const Input = ({
  setFilter,
  onSubmit,
  searchValue,
  setSearchValue,
  clearSearch,
  filtersArray,
}) => {
  return (
    <form onSubmit={(e) => onSubmit(e, searchValue)}>
      <div className="input-group mb-3 mx-auto">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Search By
          </label>
        </div>
        <div className="input-group-prepend">
          <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={(e) => setSearchValue(e.target.value)}
          >
            <option value="">Choose...</option>
            <option value="first_name">First Name</option>
            <option value="last_name">Last Name</option>
            <option value="age">Age</option>
            <option value="gender">Gender</option>
            <option value="email">Email</option>
            <option value="city">City</option>
            <option value="country">Country</option>
            <option value="address">Address</option>
          </select>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          aria-describedby="button-addon2"
          onChange={(e) => setFilter(e.target.value)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
          >
            Search
          </button>
        </div>
        <div
          className={
            filtersArray.length === 0 ? "d-none" : "input-group-append"
          }
        >
          <span
            className="btn btn-outline-danger"
            onClick={() => clearSearch()}
          >
            Clear Search
          </span>
        </div>
      </div>
    </form>
  );
};

export default Input;
