import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (userName, age) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        { name: userName, age: age, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </>
  );
}

export default App;
