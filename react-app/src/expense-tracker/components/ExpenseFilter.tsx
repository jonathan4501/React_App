import React from "react";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div>
      <label htmlFor="category-filter" className="form-label">
        Filter by category
      </label>
      <select
        id="category-filter"
        className="form-select"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="">All categories</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
