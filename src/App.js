import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import DataTable from "./components/DataTable";
import Input from "./components/Input";
import Pagination from "./components/Pagination";
import Loader from "react-loader-spinner";

const App = () => {
  const [users, setUsers] = useState([]);
  const [filterUser, setFilterUsers] = useState("");
  const [pagination, setPagination] = useState(10);
  const [sortOrder, setSortOrder] = useState(true);
  const [filtersArray, setFiltersArray] = useState([]);
  const [searchValue, setSearchValue] = useState("first_name");
  const [time, setTime] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://my.api.mockaroo.com/my_saved_schema.json?key=fafa4ad0"
      );
      setUsers(result.data);
    };
    fetchData();
  }, [setUsers]);

  const filterSearch = (e, value) => {
    let performance = window.performance;
    let start = performance.now();
    const filterUsers = users.filter((user) => {
      let key = value;
      return user[key]
        .toString()
        .toLowerCase()
        .includes(filterUser.toLocaleLowerCase());
    });
    let end = performance.now();

    setFiltersArray(filterUsers);
    let duration = end - start;
    setTime(duration);
    e.preventDefault();
  };
  const sortArray = (element) => {
    setSortOrder(!sortOrder);
    const arraySort = filtersArray.length > 0 ? filtersArray : users;
    const sorted = arraySort.sort((a, b) => {
      let key = element;
      return a[key] !== b[key] ? (a[key] < b[key] ? -1 : 1) : 0;
    });
    if (sortOrder === true) {
      setSortOrder(false);
      return setUsers(sorted);
    } else {
      setSortOrder(true);
      return setUsers(sorted.reverse());
    }
  };

  const clearSearch = () => {
    setFiltersArray([]);
    setTime(0);
  };

  return (
    <div className="container-fluid">
      <div className="header text-center">
        <h1>
          Table Data Viewer{" "}
          <button type="button" className="btn btn-primary">
            {filtersArray.length === 0
              ? "No Search Results Found"
              : "Rows Found"}
            <span className="badge badge-light ml-2">
              {filtersArray.length}
            </span>
            <span className="badge badge-pill badge-secondary">
              ({time} milliseconds)
            </span>
          </button>
        </h1>
      </div>
      <div className="container">
        <Input
          setFilter={setFilterUsers}
          onSubmit={filterSearch}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          clearSearch={clearSearch}
          filtersArray={filtersArray}
        />
      </div>
      {users.length === 0 ? (
        <div className="text-center">
          <Loader type="ThreeDots" color="#00BFFF" height={150} width={150} />
        </div>
      ) : filtersArray.length !== 0 ? (
        <div>
          <DataTable users={filtersArray} sortArray={sortArray} />{" "}
        </div>
      ) : (
        <div>
          <DataTable
            users={users}
            sortArray={sortArray}
            pagination={pagination}
          />
          <Pagination setPagination={setPagination} />
        </div>
      )}
    </div>
  );
};

export default App;
