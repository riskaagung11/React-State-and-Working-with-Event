import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  let filteredInfoText = "2021, 2022 and 2023";

  if (filteredYear === "2021") {
    filteredInfoText = "2020, 2022 and 2023";
  } else if (filteredYear === "2022") {
    filteredInfoText = "2020, 2021 and 2023";
  } else if (filteredYear === "2023") {
    filteredInfoText = "2020, 2021 and 2022";
  }

  const filterChangeHandeler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <p style={{ color: "white" }}>Data for {filteredInfoText} is hidden</p>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandeler} />
        <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
        <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
        <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
        <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} />
      </Card>
    </div>
  );
};

export default Expenses;
