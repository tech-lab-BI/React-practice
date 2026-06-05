import { useContext } from "react";
import { ExpenseList } from "../store/ExpenseList-store";

function Dashboard() {
  const { income, expense } = useContext(ExpenseList);
  return (
    <>
      <div class="card expense-dashboard" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">Balance : {income - expense}</h5>
          <span class="badge text-bg-primary expense-dashboard-badge">
            Income : {income}
          </span>
          <span class="badge text-bg-success">Expense : {expense}</span>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
