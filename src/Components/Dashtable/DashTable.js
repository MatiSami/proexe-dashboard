import React from "react";
import { Button } from "react-bootstrap";

const DashTable = ({
  data,
  openEditModal,
  openDeleteModal,
  sorted,
  compare,
}) => {
  const users = data;

  if (sorted && compare) {
    function compareStrings(a, b) {
      a = a.toLowerCase();
      b = b.toLowerCase();

      return a < b ? -1 : a > b ? 1 : 0;
    }

    data.sort(function (a, b) {
      return compareStrings(a.name, b.name);
    });
  }
  if (!sorted && compare) {
    function compareStrings(a, b) {
      a = a.toLowerCase();
      b = b.toLowerCase();

      return a > b ? -1 : a < b ? 1 : 0;
    }

    data.sort(function (a, b) {
      return compareStrings(a.name, b.name);
    });
  }

  return (
    <>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.address.city}</td>
            <td>
              <Button onClick={openEditModal} variant="warning">
                Edit
              </Button>
            </td>
            <td>
              <Button onClick={openDeleteModal} variant="danger">
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default DashTable;
