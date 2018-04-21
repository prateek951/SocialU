import React from "react";
export const SalaryOutput = props => {
  var hra = 0;
  hra = props.salary * 0.3;
  var da = props.salary * 0.2;
  var ta = props.salary * 0.1;
  return (
    <div>
      Basic Salary is {props.salary}
      <br />
      HRA {hra}
      <br />
      DA {da}
      <br />
      TA {ta}
      <br />
      G.S {parseInt(props.salary) + hra + da + ta}
    </div>
  );
};
