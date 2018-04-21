import React from "react";
export const SalaryInput = props => {
  return (
    <div>
      <label>Salary</label>
      <input onChange={props.takeSal} type="text" placeholder="Type Salary" />
    </div>
  );
};
