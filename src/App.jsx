import Form from "./Form";
import ExpenseList from "./expensetracker/components/ExpenseList";

const App = () => {
  const expenses = [
    { id: 1, description: "aaa", amount: 10, category: "utilities" },
    { id: 2, description: "aaa", amount: 10, category: "utilities" },
    { id: 3, description: "aaa", amount: 10, category: "utilities" },
    { id: 4, description: "aaa", amount: 10, category: "utilities" },
  ];
  return (
    <div>
      <Form />
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => console.log("expenses", id)}
      />
    </div>
  );
};

export default App;
