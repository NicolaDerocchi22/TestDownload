import styles from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((u) => {
          return (
            <li key={u.id}>
              {u.name} - ({u.age} years old){" "}
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
