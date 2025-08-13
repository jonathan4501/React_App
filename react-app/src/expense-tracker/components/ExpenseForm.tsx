import React from "react";

const ExpenseForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input id="description" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label"></label>
        <input type="number" className="form-control" />
      </div>
    </form>
  );
};

export default ExpenseForm;
