import { useContext } from "react";
import { ExpenseList } from "../store/ExpenseList-store";

function ExpenseTableItems() {
  const { expenseList, deleteExpense } = useContext(ExpenseList);
  return (
    <>
      {expenseList.map((item) => (
        <ul class="list-group list-group-horizontal" key={item.slNo}>
          <li class="list-group-item expense-table-parameter">{item.slNo}</li>
          <li class="list-group-item expense-table-parameter">{item.name}</li>
          <li class="list-group-item expense-table-parameter">{item.amount}</li>
          <li class="list-group-item expense-table-parameter">{item.type}</li>
          <li class="list-group-item expense-table-parameter">
            <div
              class="btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              <button type="button" class="btn btn-outline-primary">
                Edit
              </button>
              <button type="button" class="btn btn-outline-primary" onClick={() => deleteExpense(item.slNo)}>
                Delete
              </button>
            </div>
          </li>
        </ul>
      ))}
    </>
  );
}
export default ExpenseTableItems;
