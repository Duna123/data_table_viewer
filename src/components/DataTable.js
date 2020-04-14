import React from "react";

const DataTable = ({ users, pagination, sortArray }) => {
  return (
    <div className="table-responsive-sm-md-lg">
      <table className="table table-striped table-hover table-dark">
        <thead className="bg-primary">
          <tr>
            <th scope="col">#</th>
            <th scope="col" onClick={() => sortArray("first_name")}>
              First Name
            </th>
            <th scope="col" onClick={() => sortArray("last_name")}>
              Last Name
            </th>
            <th scope="col" onClick={() => sortArray("user_name")}>
              User Name
            </th>
            <th scope="col" onClick={() => sortArray("age")}>
              Age
            </th>
            <th scope="col" onClick={() => sortArray("gender")}>
              Gender
            </th>
            <th scope="col" onClick={() => sortArray("email")}>
              Email
            </th>
            <th scope="col" onClick={() => sortArray("country")}>
              Country
            </th>
            <th scope="col" onClick={() => sortArray("city")}>
              City
            </th>
            <th scope="col" onClick={() => sortArray("address")}>
              Address
            </th>
          </tr>
        </thead>
        {users.slice(0, pagination).map((user) => {
          return (
            <tbody key={user.id}>
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.first_name}</td>

                <td>{user.last_name}</td>

                <td>{user.user_name}</td>

                <td>{user.age}</td>

                <td>{user.gender}</td>

                <td>{user.email}</td>

                <td>{user.country}</td>

                <td>{user.city}</td>

                <td>{user.address}</td>
              </tr>
            </tbody>
          );
        })}
        <thead className="bg-primary">
          <tr>
            <th scope="col">#</th>
            <th scope="col" onClick={() => sortArray("first_name")}>
              First Name
            </th>
            <th scope="col" onClick={() => sortArray("last_name")}>
              Last Name
            </th>
            <th scope="col" onClick={() => sortArray("user_name")}>
              User Name
            </th>
            <th scope="col" onClick={() => sortArray("age")}>
              Age
            </th>
            <th scope="col" onClick={() => sortArray("gender")}>
              Gender
            </th>
            <th scope="col" onClick={() => sortArray("email")}>
              Email
            </th>
            <th scope="col" onClick={() => sortArray("country")}>
              Country
            </th>
            <th scope="col" onClick={() => sortArray("city")}>
              City
            </th>
            <th scope="col" onClick={() => sortArray("address")}>
              Address
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default DataTable;
