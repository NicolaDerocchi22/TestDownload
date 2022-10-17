import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Fuond no expenses.</h2>
  }

  return (
    <ul className="expenses-list">
      {props.items.map((e) => (
        <ExpenseItem
          title={e.title}
          amount={e.amount}
          date={e.date}
          key={e.id}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
