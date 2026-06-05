import ExpenseTableItems from "./ExpenseTableItems";
import ExpenseTableTitle from "./ExpenseTableTitle";

function ExpenseTable() {
  return (
    <>
      <div class="expense-table">
        <ExpenseTableTitle />
        <ExpenseTableItems />
      </div>
    </>
  );
}
export default ExpenseTable;
