import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import React, { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState(undefined);

  const userName = nameInputRef.current.value;
  const age = ageInputRef.current.value;

  const addUserHandler = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }
    props.onAddUser(userName, age);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit" onClick={addUserHandler}>
            Add user
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
