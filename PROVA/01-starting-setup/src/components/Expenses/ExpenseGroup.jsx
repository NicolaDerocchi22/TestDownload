import Card from "../UI/Card";
import "./ExpenseGroup.css";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const ExpenseGroup = (props) => {
  const [filter, setFilter] = useState("2022");

  const changeHandler = (selectedYear) => {
    setFilter(selectedYear);
  };

  const filteredExpenses = props.data.filter((e) => {
    return e.date.getFullYear().toString() === filter;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onChangeFilter={changeHandler} selectedFilter={filter} />\
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default ExpenseGroup;
