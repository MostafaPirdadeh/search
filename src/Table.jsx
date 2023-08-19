import React from "react";

function Table({data}) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>SureName</th>
          <th>Email</th>
        </tr>
        {data.map((item) => {
          return (
            <tr>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
