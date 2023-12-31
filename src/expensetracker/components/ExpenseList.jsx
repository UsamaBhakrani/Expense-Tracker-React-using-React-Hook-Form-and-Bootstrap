const ExpenseList = ({ expenses, onDelete }) => {
  if (expenses.length === 0) {
    return null;
  }
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(({ id, description, amount, category }) => (
            <tr key={id}>
              <td>{description}</td>
              <td>{amount}</td>
              <td>{category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              $
              {expenses
                .reduce((acc, expense) => expense.amount + acc, 0)
                .toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
