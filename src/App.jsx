import { useState } from "react";
import Form from "./Form";
import ExpenseList from "./expensetracker/components/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "utilities" },
    { id: 2, description: "aaa", amount: 10, category: "utilities" },
    { id: 3, description: "aaa", amount: 10, category: "utilities" },
    { id: 4, description: "aaa", amount: 10, category: "utilities" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
};

export default App;
