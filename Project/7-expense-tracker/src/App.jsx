import { useState } from "react";
import "./App.css";
import AddExpense from "./component/AddExpense";
import BasicFunction from "./component/BasicFunction";
import Dashboard from "./component/Dashboard";
import ExpenseTable from "./component/ExpenseTable";
import Title from "./component/Title";
import ExpenseListProvider from "./store/ExpenseList-store";

function App() {
  const [showAddForm, setShowAddForm] = useState("false");
  return (
    <ExpenseListProvider>
      <center>
        <Title></Title>
        <Dashboard></Dashboard>
        {showAddForm === "true" ? (
          <AddExpense setShowAddForm={setShowAddForm}/>
        ) : (
          <>
            <BasicFunction setShowAddForm={setShowAddForm}/>
            <ExpenseTable />
          </>
        )}
      </center>
    </ExpenseListProvider>
  );
}

export default App;
