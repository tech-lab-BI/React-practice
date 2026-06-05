import { useContext, useRef } from "react";
import { ExpenseList } from "../store/ExpenseList-store";

function AddExpense({ setShowAddForm }) {
  const { expenseList, addExpense } = useContext(ExpenseList);

  let nameElement = useRef();
  let amountElement = useRef();
  let typeElement = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const slNo = expenseList.length + 1;
    const name = nameElement.current.value;
    const amount = amountElement.current.value;
    const type = typeElement.current.value;
    addExpense(slNo, name, amount, type);
    nameElement.current.value = "";
    amountElement.current.value = "";
    typeElement.current.value = "";
    setShowAddForm("false");
  }
  return (
    <>
      <form style={{ width: "300px" }} onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="name" class="form-label">
            Expense name
          </label>
          <input type="text" class="form-control" id="name" ref={nameElement} />
        </div>
        <div class="mb-3">
          <label for="ammount" class="form-label">
            Amount
          </label>
          <input
            type="number"
            class="form-control"
            id="amount"
            ref={amountElement}
          />
        </div>
        <select
          class="form-select"
          aria-label="Default select example"
          ref={typeElement}
        >
          <option selected>Select Expense Tyoe</option>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
          <option value="Settle">Settel</option>
        </select>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
export default AddExpense;
