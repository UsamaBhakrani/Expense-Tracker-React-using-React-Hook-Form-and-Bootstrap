import { useState } from "react";
import Form from "./Form";
import ExpenseList from "./expensetracker/components/ExpenseList";
import ExpenseFilter from "./expensetracker/components/ExpenseFilter";

export const categories = ["Groceries", "Utilities", "Entertainment"];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 10, category: "Utilities" },
    { id: 2, description: "Eggs", amount: 8, category: "Entertainment" },
    { id: 3, description: "Bread", amount: 6, category: "Groceries" },
  ]);

  const filteredExpenses = selectedCategory
    ? expenses.filter((e) => selectedCategory === e.category)
    : expenses;

  return (
    <div className="mb-3">
      <Form />
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        className="m-3"
        expenses={filteredExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
};

export default App;
