import React from "react";

const Pagination = ({ setPagination }) => {
  return (
    <div className="form-group">
      <label htmlFor="exampleFormControlSelect1">
        Select how many users to display
      </label>
      <select
        className="form-control"
        id="exampleFormControlSelect1"
        onChange={(e) => setPagination(e.target.value)}
      >
        <option value="">Select...</option>
        <option value="10">Show 10</option>
        <option value="20">Show 20</option>
        <option value="50">Show 50</option>
        <option value="100">Show 100</option>
        <option value="1000">Show 1000</option>
        <option value="5000">Show all</option>
      </select>
    </div>
  );
};

export default Pagination;
