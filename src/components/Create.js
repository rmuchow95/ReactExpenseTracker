import React from "react";

function createExpense(expense) {
  return (
    <div className="create">
      <h2>Add a new expense</h2>
      <form>
        <label>Date:</label>
        <input type="date" required />

        <label>Expense:</label>
        <input type="text" />

        <label>Cost:</label>
        <input type="text" />

        <label>Location:</label>
        <input type="text" />
        <button>Add expense</button>
      </form>
    </div>
  );
}

export default createExpense;
