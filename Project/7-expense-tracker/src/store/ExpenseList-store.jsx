import { createContext, useReducer, useState } from "react";

export const ExpenseList = createContext({
  expenseList: [],
  addExpense: () => {},
  deleteExpense: () => {},
  editExpense: () => {},
  income: 0,
  expense: 0,
});
function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      state = [...state, action.payload];
      break;
    case "DELETE":
      state = state.filter((item) => item.slNo !== action.payload);
      break;
    default:
      alert("Reducer error");
  }
  return state;
}
function ExpenseListProvider({ children }) {
  const [expenseList, dispatchExpenseList] = useReducer(
    reducer,
    DEFAULT_EXPENSE_LIST,
  );

  const addExpense = (slNo, name, amount, type) => {
    {
      type === "Income"
        ? (income += amount)
        : (income -= amount);
    }
    console.log(income);
    dispatchExpenseList({
      type: "ADD",
      payload: {
        slNo,
        name,
        amount,
        type,
      },
    });
  };
  const deleteExpense = (slNo) => {
    dispatchExpenseList({
      type: "DELETE",
      payload: slNo,
    });
  };
  const editExpense = () => {};
  let [income, setIncome] = useState(0);
  let [expense, setExpense] = useState(0);
  return (
    <ExpenseList.Provider
      value={{
        expenseList,
        addExpense,
        deleteExpense,
        editExpense,
        income,
        expense,
      }}
    >
      {children}
    </ExpenseList.Provider>
  );
}

const DEFAULT_EXPENSE_LIST = [
  {
    slNo: "1",
    name: "Buy milk",
    amount: 200,
    type: "need",
  },
  {
    slNo: "2",
    name: "Buy milk",
    amount: 200,
    type: "need",
  },
];

export default ExpenseListProvider;
